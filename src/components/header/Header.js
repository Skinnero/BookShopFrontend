import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./Header.css"
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Basket from "../basket/Basket";
import {useState} from "react";
import {getCustomerById} from "../../api/Customer";

const Header = () => {
    const [isBasketOpen, setIsBasketOpen] = useState(false)

    const openBasket = () => {
        setIsBasketOpen(true)
    }
    const closeBasket = () => {
        setIsBasketOpen(false)
    }

    const loginCustomer = () => {
        const id = "0105a491-27f6-409a-b625-d89aea542696"
        getCustomerById(id).then()
    }

    return (
        <Navbar className="bg-body-tertiary header">
            <Container fluid>
                <Navbar.Brand>CodeCool Shop</Navbar.Brand>
                <Form inline="true">
                    <Row>
                        <Col>
                            <Form.Control
                                type={"text"}
                                placeholder={"Search"}
                                className={"mr-sm-2"}
                            />
                        </Col>
                    </Row>
                </Form>
                <Nav>
                    <Button variant={"outline-info"} className={"button"} onClick={openBasket}>Basket</Button>
                    <Link to={"/login"}>
                        <Button variant={"success"} className={"button"} onClick={loginCustomer}>Log in</Button>
                    </Link>
                    <Link to={"/signup"}>
                        <Button variant={"success"} className={"button"}>Sign up</Button>
                    </Link>
                </Nav>
                <Basket isOpen={isBasketOpen} closeBasket={closeBasket}></Basket>
            </Container>
        </Navbar>
    )
}
export default Header