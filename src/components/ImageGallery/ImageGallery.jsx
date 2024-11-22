import ImageCard from "../ImageCard/ImageCard"
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <div>
            <ul>
                {images.map(image => {
                    return (<li key={image.id}>
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