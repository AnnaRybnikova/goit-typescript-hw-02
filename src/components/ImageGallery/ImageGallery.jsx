import ImageCard from "../ImageCard/ImageCard"
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
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

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
}

export default ImageGallery