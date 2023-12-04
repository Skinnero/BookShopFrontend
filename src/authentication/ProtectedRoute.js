import {Navigate} from "react-router-dom";
import {JWT_TOKEN} from "../constants/LocalStorage";
import {LOGIN_PAGE} from "../constants/Url";
import {useLocalStorage} from "../hook/UseLocalStorage";

const ProtectedRoute = ({children}) => {
    const {getLocalStorage} = useLocalStorage(JWT_TOKEN)

    if (!getLocalStorage()) {
        return <Navigate to={LOGIN_PAGE} replace/>
    }
    return (children)
}

export default ProtectedRoute