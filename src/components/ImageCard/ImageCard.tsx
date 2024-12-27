import { FC } from 'react';
import s from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard:FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <img className={s.gallery_image} onClick={() => onImageClick(image)} src={image.urls.small} alt={image.alt_description} />
  )
}

export default ImageCard