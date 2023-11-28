import {FloatingLabel} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./UserLogin.css";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const UserLogin = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
    }
    const navigateToSignUp = () => {
        navigate("/signup")
    }

    const navigateToAuth = () => {
        document.location = "http://localhost:8080/login"
    }

    return (
        <Container className={"login-form"}>
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
                <Button variant={"success"}>Log In</Button>
                <Button variant={"success"}><a href="http://localhost:8080/oauth2/authorize/google">Continue with Google</a></Button>
                <Button variant={"secondary"} onClick={navigateToHome}>Back</Button>
                <Button variant={"info"} onClick={navigateToSignUp}>Sign Up</Button>
            </Form>
        </Container>
    )
}

export default UserLogin