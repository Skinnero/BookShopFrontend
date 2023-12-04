import {useContext, useEffect, useRef, useState} from "react";
import {
    BasketTable,
    BasketTitle,
    CheckoutButton,
    HeaderNavbar,
    LeftHeaderPanel,
    MiddleHeaderPanel,
    RightHeaderPanel
} from "./Header.styles";
import Modal from "../modal/Modal";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE, SIGNUP_PAGE, USER_PAGE} from "../../constants/Url";
import {UserContext} from "../../context/UserContext";
import {useJsCookie} from "../../hook/UseJsCookie";
import {BASKET} from "../../constants/Cookies";
import Placeholder from "../../mockdata/dummy_placeholder.png"

const Header = () => {
    const isInitialRender = useRef(true)
    const {setCookie: setBasketCookie, getCookie: getBasketCookie} = useJsCookie(BASKET)
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const {user, logout, addToBasket, removeFromBasket, removeProduct} = useContext(UserContext)
    const [anonymousBasket, setAnonymousBasket] = useState(() => {
        return getBasketCookie() ? JSON.parse(getBasketCookie()) : []
    })
    const [basket, setBasket] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (user.basket) {
            setBasket(basketGroupByQuantity(user.basket))
        } else if (getBasketCookie()) {
            setBasket(basketGroupByQuantity(JSON.parse(getBasketCookie())))
        }
    }, [user.basket, getBasketCookie()]);

    // TODO: List behave unpredicted (Moving indexes after update, sometimes remove more then it should)
    useEffect(() => {
        if (isInitialRender.current || !user.id) {
            isInitialRender.current = false;
            return;
        }
        setBasketCookie(JSON.stringify(anonymousBasket))
    }, [basket]);

    const basketGroupByQuantity = (basketList) => {
        return basketList.reduce((actual, current) => {
            const existingObject = actual.find((obj) => obj.id === current.id);

            if (existingObject) {
                existingObject.quantity += 1
            } else {
                actual.push({...current, quantity: 1})
            }
            return actual
        }, [])
    }

    const toggleBasketModal = () => {
        setIsBasketOpen(!isBasketOpen)
    }

    const changeProductQuantity = (productId, e) => {
        const index = basket.findIndex(product => product.id === productId)
        const newBasket = [...basket]


        if (!user.basket) {
            if (e.target.value < newBasket[index].quantity) {
                const indexOfProduct = anonymousBasket.findIndex(item => item.id === productId)
                const newUserBasket = anonymousBasket.filter((item, index) => index !== indexOfProduct)
                setAnonymousBasket(newUserBasket)
            } else {
                setAnonymousBasket([...anonymousBasket, newBasket[index]])
            }
        } else {
            if (e.target.value < newBasket[index].quantity) {
                removeFromBasket(newBasket[index])
            } else {
                addToBasket(newBasket[index])
            }
        }

        newBasket[index] = {...newBasket[index], quantity: e.target.value}
        setBasket(newBasket)
    }

    const removeProductFromBasket = (product) => {
        if (user.basket) {
            removeProduct(product)
        } else {
            const newBasket = anonymousBasket.filter((item) => item.id !== product.id)
            setAnonymousBasket(newBasket)
            setBasketCookie(JSON.stringify(newBasket))
        }
    }

    return (
        <HeaderNavbar>
            <LeftHeaderPanel>BookStore</LeftHeaderPanel>
            <MiddleHeaderPanel>
                <input placeholder={"Search"}
                       type={"text"}
                       name={"name"}
                />
                <div className="icon">
                    <ion-icon name="search"/>
                </div>
            </MiddleHeaderPanel>
            <RightHeaderPanel>
                <button onClick={toggleBasketModal}>Basket</button>
                {user.isLoggedIn ? (
                    <>
                        <button onClick={() => logout()}>Logout</button>
                        <button onClick={() => navigate(USER_PAGE)}>Profile</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate(LOGIN_PAGE)}>Log in</button>
                        <button onClick={() => navigate(SIGNUP_PAGE)}>Sign up</button>
                    </>
                )}
                <Modal isOpen={isBasketOpen} onClose={toggleBasketModal}>
                    <BasketTitle>
                        Your Basket
                    </BasketTitle>
                    {basket.map((product, index) => (
                        <BasketTable key={index}>
                            <tbody>
                            <tr>
                                <td className={"basketImage"}>
                                    <img src={Placeholder} alt={Placeholder}/>
                                </td>
                                <td>
                                    Name: {product.name}
                                </td>
                                <td>
                                    Price: {Math.round(product.price * product.quantity)}
                                </td>
                                <td className={"quantity"}>
                                    Quantity
                                    <input type={"number"}
                                           onChange={(e) => changeProductQuantity(product.id, e)}
                                           value={product.quantity}
                                           min={1}/>
                                </td>
                                <td className={"closeIcon"}>
                                    <ion-icon onClick={() => removeProductFromBasket(product)} name="close"></ion-icon>
                                </td>
                            </tr>
                            </tbody>
                        </BasketTable>
                    ))}
                    <CheckoutButton>Order now!</CheckoutButton>
                </Modal>
            </RightHeaderPanel>
        </HeaderNavbar>
    )
}
export default Header