import Modal from "../modal/Modal";
import Placeholder from "../../mockdata/dummy_placeholder.png";
import {useContext, useEffect, useState} from "react";
import {useJsCookie} from "../../hook/UseJsCookie";
import {BASKET} from "../../constants/Cookies";
import {UserContext} from "../../context/UserContext";
import {BasketTable, BasketTitle, CheckoutButton} from "./Basket.styles";

const Basket = ({isBasketOpen, toggleBasketModal}) => {
    const {setCookie: setBasketCookie, getCookie: getBasketCookie} = useJsCookie(BASKET)
    const [basket, setBasket] = useState([])
    const {user, addNewProductToBasket, decreaseQuantityOfProduct, removeProductFromBasket} = useContext(UserContext)

    // todo: on user basket list is random after every change

    useEffect(() => {
        if (user.basket) {
            setBasket(basketGroupByQuantity(user.basket))
        } else if (getBasketCookie()) {
            setBasket(getBasketCookie())
        }
    }, [isBasketOpen]);

    const basketGroupByQuantity = (basketList) => {
        return basketList.reduce((actual, current) => {
            const existingObject = actual.find((obj) => obj.id === current.id);
            if (existingObject) {
                existingObject.quantity += 1
            } else {
                actual.push({...current, quantity: 1})
            }
            return actual.sort((first, second) => {
                const firstName = first.name.toLowerCase()
                const secondName = second.name.toLowerCase()

                if (firstName < secondName) {
                    return -1
                }
                if (firstName > secondName) {
                    return 1
                }
                return 0
            })
        }, [])
    }

    const changeProductQuantity = (productId, e) => {
        const index = basket.findIndex(product => product.id === productId)
        const newBasket = [...basket]

        if (!user.basket) {
            const productInBasket = basket.find(item => item.id === productId)
            productInBasket.quantity = e.target.value
            setBasketCookie(basket)
        } else {
            if (e.target.value < newBasket[index].quantity) {
                decreaseQuantityOfProduct(newBasket[index])
            } else {
                addNewProductToBasket(newBasket[index])
            }
        }

        newBasket[index] = {...newBasket[index], quantity: e.target.value}
        setBasket(newBasket)
    }

    useEffect(() => {
        if (user.basket) {
            setBasket(basketGroupByQuantity(user.basket))
        }
    }, [user.basket]);

    const removeProduct = (product) => {
        if (user.basket) {
            removeProductFromBasket(product)
        } else {
            const newBasket = getBasketCookie().filter(item => item.id !== product.id)
            setBasketCookie(newBasket)
            setBasket(newBasket)
        }
    }

    return (
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
                            <ion-icon onClick={() => removeProduct(product)} name="close"></ion-icon>
                        </td>
                    </tr>
                    </tbody>
                </BasketTable>
            ))}
            <CheckoutButton>Order now!</CheckoutButton>
        </Modal>
    )
}

export default Basket