import Modal from 'react-modal';
import MedButton from "../button/MedButton.jsx";
import {FaTimes} from "react-icons/fa";
import './MedModal.scss';
Modal.setAppElement('#root');

const MedModal = ({children, title, closeButtonCallback,...props}) => {
    const propsComputed = {
        ...props,
        style: {
            overlay: {zIndex: 8},
        }
    }
    return (
        <Modal {...propsComputed}>
            <div className={'med-modal__header'}>
                <h3 title={title}>{title}</h3>
                <MedButton startIcon={FaTimes} variant={'plain'} onClick={closeButtonCallback}></MedButton>
            </div>
            <div className={'med-modal__content'}>
                {children}
            </div>
        </Modal>
    )

}

export default MedModal;