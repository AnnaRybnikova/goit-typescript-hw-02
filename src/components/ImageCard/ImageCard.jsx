import PropTypes from 'prop-types';
import s from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <img className={s.gallery_image} onClick={() => onImageClick(image)} src={image.urls.small} alt={image.alt_description} />
  )
}

ImageCard.propTypes = {
    image: PropTypes.object.isRequired,
    onImageClick: PropTypes.func.isRequired,
}

export default ImageCard