import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar.js'
import { fetchImages } from './services/api.js'
import Loader from './components/Loader/Loader.js';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.js';
import ImageGallery from './components/ImageGallery/ImageGallery.js';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.js';
import ImageModal from './components/ImageModal/ImageModal.js';
import { Image } from './types.js';
import { initialCurrentImage } from './initials.js';

function App() { 
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [currentImage, setCurrentImage] = useState<Image>(initialCurrentImage);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModalWithImage = (image: Image) => {
    setModalIsOpen(true);
    setCurrentImage(image);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(initialCurrentImage);
  }

  useEffect(() => {
    if (totalPages === page) {
      toast('You already download all posts!', {
        icon: '💬'
      });
    }
  }, [totalPages, page]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
      }
      catch {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleChangeQuery = (query: string) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <SearchBar query={query} handleChange={handleChangeQuery} />
      <ImageGallery images={images} onImageClick={openModalWithImage} />
      {totalPages > page && images.length !== 0 && !isLoading
        && <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Something went wrong! Refresh the page...</ErrorMessage>}
      {modalIsOpen && <ImageModal
        isOpen={modalIsOpen}
        onClose={() => closeModal()}
        image={currentImage}
      />}
    </>
  )
}

export default App
