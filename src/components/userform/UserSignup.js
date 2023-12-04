import {useNavigate} from "react-router-dom";
import {
    BackButton,
    UserConfirmationButton,
    UserCredentialContentDiv,
    UserCredentialDiv,
    UserCredentialInput,
    UserCredentialTitle,
    UserLink,
    UserText
} from "./UserLogin.styles";
import {LOGIN_PAGE, MAIN_PAGE} from "../../constants/Url";
import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext";

const UserSignup = () => {
    const navigate = useNavigate();
    const {signup} = useContext(UserContext)
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const updateUserCredentials = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (userCredentials.password !== userCredentials.repeatPassword) {
            alert("Password and RepeatedPassword must be the same")
        }
        signup(userCredentials)
    }

    return (
        <UserCredentialDiv>
            <UserCredentialContentDiv>
                <BackButton onClick={() => navigate(MAIN_PAGE)}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </BackButton>
                <UserCredentialTitle>Sign Up</UserCredentialTitle>
                <form onSubmit={onSubmit}>
                    <UserCredentialInput type={"text"}
                                         placeholder={"Name"}
                                         name={"name"}
                                         onChange={updateUserCredentials}>
                    </UserCredentialInput>
                    <UserCredentialInput type={"email"}
                                         placeholder={"Email"}
                                         name={"email"}
                                         onChange={updateUserCredentials}>
                    </UserCredentialInput>
                    <UserCredentialInput type={"password"}
                                         placeholder={"Password"}
                                         name={"password"}
                                         onChange={updateUserCredentials}>
                    </UserCredentialInput>
                    <UserCredentialInput type={"password"}
                                         placeholder={"Repeat Password"}
                                         name={"repeatPassword"}
                                         onChange={updateUserCredentials}>
                    </UserCredentialInput>
                    <UserConfirmationButton>Sign Up</UserConfirmationButton>
                </form>
                <UserText>
                    Already have an account?
                </UserText>
                <UserLink onClick={() => navigate(LOGIN_PAGE)}>
                    Log In
                </UserLink>
            </UserCredentialContentDiv>
        </UserCredentialDiv>
    )
}

export default UserSignup