import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "../components/homepage/HomePage.js"
import NotFoundPage from "../components/error/NotFoundPage.js"
import UserProfile from "../components/userprofile/UserProfile"
import ProtectedRoute from "../authentication/ProtectedRoute";
import UserSignup from "../components/userform/UserSignup";
import UserLogin from "../components/userform/UserLogin";
import UnauthorizedRoute from "../authentication/UnauthorizedRoute";


const Routing = () => (
    <Router>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
            <Route path={"/login"} element={
                <UnauthorizedRoute>
                    <UserLogin/>
                </UnauthorizedRoute>
            }/>
            <Route path={"/signup"} element={
                <UnauthorizedRoute>
                    <UserSignup/>
                </UnauthorizedRoute>
            }/>
            <Route path={"/profile"} element={
                <ProtectedRoute>
                    <UserProfile/>
                </ProtectedRoute>
            }/>
            <Route path={"/checkout"} element={
                <ProtectedRoute>
                    <UserProfile/>
                </ProtectedRoute>
            }/>
        </Routes>
    </Router>
)

export default Routing