import {Navigate} from "react-router-dom";
import {JWT_TOKEN} from "../constants/LocalStorage";
import {USER_PAGE} from "../constants/Url";
import {useLocalStorage} from "../hook/UseLocalStorage";

const UnauthorizedRoute = ({children}) => {
    const {getLocalStorage} = useLocalStorage(JWT_TOKEN)

    if (getLocalStorage()) {
        return <Navigate to={USER_PAGE} replace/>
    }
    return (children)
}

export default UnauthorizedRoute