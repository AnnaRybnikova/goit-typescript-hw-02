import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar.jsx'
import { fetchImages } from './services/api.js'
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalWithImage = (image) => {
    setModalIsOpen(true);
    setCurrentImage(image);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage({});
  }

  useEffect(() => {
    if (totalPages === page) {
      toast('You already download all posts!', {
        icon: '💬'
      });
    }
  }, [totalPages, page]);

  useEffect(() => {
    const getData = async () => {
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

  const handleChangeQuery = query => {
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
        onClose={() => closeModal}
        image={currentImage}
      />}
    </>
  )
}

export default App
