import {createContext, useEffect, useRef, useState} from "react";
import {useApi} from "../hook/UseApi";
import {useLocalStorage} from "../hook/UseLocalStorage";
import {JWT_TOKEN, REFRESH_TOKEN, USER_ID} from "../constants/LocalStorage";
import {LOGIN_PAGE, MAIN_PAGE} from "../constants/Url";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const isInitialRender = useRef(true)
    const {post, get, update} = useApi()
    const {
        setLocalStorage: setJwtToken,
        removeLocalStorage: removeJwtToken
    } = useLocalStorage(JWT_TOKEN)
    const {
        setLocalStorage: setUserId,
        removeLocalStorage: removeUserId,
        getLocalStorage: getUserId
    } = useLocalStorage(USER_ID)
    const {
        setLocalStorage: setRefreshToken,
        removeLocalStorage: removeRefreshToken
    } = useLocalStorage(REFRESH_TOKEN)

    const login = (userCredentials) => {
        post("/api/v1/auths/login", userCredentials)
            .then(resp => {
                setUserCredentials(resp)
                window.location.href = MAIN_PAGE
            })
            .then(() => {
                authenticate()
            })
    }

    const signup = (userCredentials) => {
        post("/api/v1/auths/signup", userCredentials)
            .then(() => {
                window.location.href = LOGIN_PAGE
            })
    }

    const logout = () => {
        post("/api/v1/auths/logout")
            .then(() => {
                removeUserCredentials()
            })
    }

    const authenticate = async () => {
        if (getUserId()) {
            const {basketId, products} = await getUserBasket(getUserId())
            setUser({
                ...user,
                id: getUserId(),
                isLoggedIn: true,
                basketId: basketId,
                basket: products
            })
        }
    }

    const setUserCredentials = (data) => {
        setJwtToken(data.type + " " + data.accessToken)
        setRefreshToken(data.refreshToken)
        setUserId(data.customerId)
        setUser({
            ...user,
            id: data.customerId
        })
    }

    const removeUserCredentials = () => {
        removeJwtToken()
        removeRefreshToken()
        removeUserId()
        setUser({
            isLoggedIn: false
        })
    }

    const getUserBasket = (userId) => {
        return get("/api/v1/baskets", {customerId: userId})
            .then(resp => {
                return resp
            })
            .catch((err) => {
                if (err.response.status !== 401) {
                    post("/api/v1/baskets", {customerId: userId})
                        .then(() => {
                            get("/api/v1/baskets", {customerId: userId})
                                .then(resp => {
                                    return resp
                                })
                        })
                }
            })
    }

    useEffect(() => {
        if (isInitialRender.current || !user.id) {
            isInitialRender.current = false;
            return;

        }

        const productsToRequest = user.basket.map(product => product.id)
        update("/api/v1/baskets/" + user.basketId, {products: productsToRequest})
    }, [user.basket]);

    const addToBasket = (product) => {
        setUser({
            ...user,
            basket: [...user.basket, product]
        })
    }

    const removeFromBasket = (product) => {
        const indexOfProduct = user.basket.findIndex(item => item.id === product.id)
        const newBasket = user.basket.filter((item, index) => index !== indexOfProduct)
        setUser({
            ...user,
            basket: newBasket
        })
    }

    const removeProduct = (product) => {
        const newBasket = user.basket.filter((item) => item.id !== product.id)
        setUser({
            ...user,
            basket: newBasket
        })
    }


    return (
        <UserContext.Provider
            value={{user, addToBasket, removeFromBasket, removeProduct, authenticate, login, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}