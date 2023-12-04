import {ModalContainer, ModalContent} from "./Modal.styles";

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null
    }

    const handleContainerExit = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <ModalContainer onMouseDown={handleContainerExit}>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal