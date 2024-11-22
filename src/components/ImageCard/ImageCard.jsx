import PropTypes from 'prop-types';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div>
        <img onClick={() => onImageClick(image)} src={image.urls.small} alt={image.alt_description} />
	</div>
  )
}

ImageCard.propTypes = {
    image: PropTypes.object.isRequired,
    onImageClick: PropTypes.func.isRequired,
}

export default ImageCard