import { FC } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';
import clsx from "clsx";
import { Image } from '../../types';

Modal.setAppElement('#root');

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: Image;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, image }) => {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => onClose()}
                className={s.modal_content}
                contentLabel="Example Modal"
                overlayClassName={clsx(s.overlay, 'ReactModal__Overlay')}
            >
                <img src={image.urls.regular} alt={image.alt_description} />
            </Modal>
        </div>
  )
}

export default ImageModal