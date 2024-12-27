import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css';
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <div className={s.gallery_container}>
            <ul className={s.gallery}>
                {images.map(image => {
                    return (<li className={s.gallery_item} key={image.id}>
                        <ImageCard image={image} onImageClick={onImageClick} />
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default ImageGallery