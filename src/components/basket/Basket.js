import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const Basket = ({isOpen, closeBasket}) => {
    const navigate = useNavigate()

    const openCheckoutSite = () => {
        navigate("/checkout")
    }

    return (
        <Modal show={isOpen} onHide={closeBasket}>
            <Modal.Header closeButton>
                <Modal.Title>Your Basket</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={openCheckoutSite}>
                    Go to Checkout!
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Basket