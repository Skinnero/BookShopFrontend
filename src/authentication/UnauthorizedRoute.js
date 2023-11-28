import {Navigate} from "react-router-dom";

const UnauthorizedRoute = ({children}) => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
        return <Navigate to={"/profile"} replace/>
    }
    return (children)
}

export default UnauthorizedRoute