import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "../components/homepage/HomePage.js"
import NotFoundPage from "../components/error/NotFoundPage.js"
import UserProfile from "../components/userprofile/UserProfile"
import ProtectedRoute from "../authentication/ProtectedRoute";
import UserSignup from "../components/userform/UserSignup";
import UserLogin from "../components/userform/UserLogin";
import UnauthorizedRoute from "../authentication/UnauthorizedRoute";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext";
import {CHECKOUT_PAGE, LOGIN_PAGE, MAIN_PAGE, SIGNUP_PAGE, USER_PAGE} from "../constants/Url";


const Routing = () => {
    const {authenticate} = useContext(UserContext)

    useEffect(() => {
        authenticate()
    }, []);

    return (
        <Router>
            <Routes>
                <Route path={"*"} element={<NotFoundPage/>}/>
                <Route path={MAIN_PAGE} element={<HomePage/>}/>
                <Route path={LOGIN_PAGE} element={
                    <UnauthorizedRoute>
                        <UserLogin/>
                    </UnauthorizedRoute>
                }/>
                <Route path={SIGNUP_PAGE} element={
                    <UnauthorizedRoute>
                        <UserSignup/>
                    </UnauthorizedRoute>
                }/>
                <Route path={USER_PAGE} element={
                    <ProtectedRoute>
                        <UserProfile/>
                    </ProtectedRoute>
                }/>
                <Route path={CHECKOUT_PAGE} element={
                    <ProtectedRoute>
                        <UserProfile/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default Routing