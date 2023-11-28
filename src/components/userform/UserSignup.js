import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {FloatingLabel} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./UserSignup.css"
import {useNavigate} from "react-router-dom";

const UserSignup = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
    }
    const navigateToLogIn = () => {
        navigate("/login")
    }

    const navigateToAuth = () => {
        document.location = "http://localhost:8080/login"
    }

    return (
        <Container className={"signup-form"}>
            <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com"/>
                </FloatingLabel>
                <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password"/>
                </FloatingLabel>
                <FloatingLabel className="mb-3" controlId="floatingPassword" label="Repeat password">
                    <Form.Control type="password" placeholder="Repeat password"/>
                </FloatingLabel>
                <Button variant={"success"}>Sign Up</Button>
                <Button variant={"success"} onClick={navigateToAuth}>Continue with Google</Button>
                <Button variant={"secondary"} onClick={navigateToHome}>Back</Button>
                <Button variant={"info"} onClick={navigateToLogIn}>Log In</Button>
            </Form>
        </Container>
    )
}

export default UserSignup