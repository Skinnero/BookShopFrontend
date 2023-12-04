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
import {MAIN_PAGE, SIGNUP_PAGE} from "../../constants/Url";
import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext";

const UserLogin = () => {
    const navigate = useNavigate();
    const {login} = useContext(UserContext)
    const [userCredentials, setUserCredentials] =useState({
        email: '',
        password: ''
    })

    const updateUserCredentials = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        login(userCredentials)
    }
    return (
        <UserCredentialDiv>
            <UserCredentialContentDiv>
                <BackButton onClick={() => navigate(MAIN_PAGE)}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </BackButton>
                <UserCredentialTitle>Log In</UserCredentialTitle>
                <form onSubmit={onSubmit}>
                    <UserCredentialInput type={"email"}
                                         name={"email"}
                                         onChange={updateUserCredentials}
                                         placeholder={"Email"}>
                    </UserCredentialInput>
                    <UserCredentialInput type={"password"}
                                         name={"password"}
                                         onChange={updateUserCredentials}
                                         placeholder={"Password"}>

                    </UserCredentialInput>
                    <UserConfirmationButton>Log In</UserConfirmationButton>
                </form>
                <UserText>
                    Not registered yet?
                </UserText>
                <UserLink onClick={() => navigate(SIGNUP_PAGE)}>
                    Sign Up
                </UserLink>
            </UserCredentialContentDiv>
        </UserCredentialDiv>
    )
}

export default UserLogin