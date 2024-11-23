import Modal from 'react-modal';
import PropTypes from 'prop-types';
import s from './ImageModal.module.css';
import clsx from "clsx";

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
    
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose()}
                className={s.modal_content}
                contentLabel="Example Modal"
                overlayClassName={clsx(s.overlay, 'ReactModal__Overlay')}
            >
                <img src={image.urls.regular} alt={image.alt_description} />
            </Modal>
        </div>
  )
}

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
}

export default ImageModal