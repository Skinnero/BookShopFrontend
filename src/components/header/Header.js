import {useContext, useState} from "react";
import {HeaderNavbar, LeftHeaderPanel, MiddleHeaderForm, RightHeaderPanel} from "./Header.styles";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE, MAIN_PAGE, SIGNUP_PAGE, USER_PAGE} from "../../constants/Url";
import {UserContext} from "../../context/UserContext";
import {useApi} from "../../hook/UseApi";
import Basket from "../basket/Basket";

const Header = ({setProducts, showSearchBar}) => {
    const {get} = useApi()
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const {user, logout} = useContext(UserContext)
    const [searchBar, setSearchBar] = useState({name: ''})
    const navigate = useNavigate()

    const toggleBasketModal = () => {
        setIsBasketOpen(!isBasketOpen)
    }

    const updateSearchBar = (e) => {
        setSearchBar({
            ...searchBar,
            [e.target.name]: e.target.value
        })
    }

    const filterProducts = (e) => {
        e.preventDefault()
        get("/api/v1/products", searchBar)
            .then(resp => {
                setProducts(resp)
            })
    }

    return (
        <HeaderNavbar>
            <LeftHeaderPanel onClick={() => navigate(MAIN_PAGE)}>BookStore</LeftHeaderPanel>
            {showSearchBar ? (
                <MiddleHeaderForm onSubmit={filterProducts}>
                    <input placeholder={"Search"}
                           type={"text"}
                           name={"name"}
                           onChange={updateSearchBar}
                    />
                    <div className="icon">
                        <ion-icon name="search"/>
                    </div>
                </MiddleHeaderForm>
            ) : (
                <MiddleHeaderForm/>
            )}

            <RightHeaderPanel>
                <button onClick={toggleBasketModal}>Basket</button>
                {user.isLoggedIn ? (
                    <>
                        <button onClick={logout}>Logout</button>
                        <button onClick={() => navigate(USER_PAGE)}>Profile</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate(LOGIN_PAGE)}>Log in</button>
                        <button onClick={() => navigate(SIGNUP_PAGE)}>Sign up</button>
                    </>
                )}
                <Basket isBasketOpen={isBasketOpen} toggleBasketModal={toggleBasketModal}/>
            </RightHeaderPanel>
        </HeaderNavbar>
    )
}
export default Header