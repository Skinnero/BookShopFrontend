import Placeholder from "../../mockdata/dummy_placeholder.png"
import {ProductButton, ProductCard, ProductCardBody, ProductPrice, ProductsGrid, ProductTitle} from "./Product.styles";
import {useJsCookie} from "../../hook/UseJsCookie";
import {BASKET} from "../../constants/Cookies";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext";

const Product = ({products}) => {
    const {user, addNewProductToBasket} = useContext(UserContext)
    const {setCookie: setBasket, getCookie: getBasket} = useJsCookie(BASKET)

    const handleAddToCart = (product) => {
        if (!user.id) {
            if (!getBasket()) {
                product.quantity = 1
                setBasket([product])
            } else {
                const oldBasket = getBasket()
                const productInBasket = oldBasket.find(prod => prod.id === product.id)
                if (productInBasket) {
                    productInBasket.quantity += 1
                } else {
                    product.quantity = 1
                    oldBasket.push(product)
                }
                setBasket(oldBasket)
            }
        } else {
            addNewProductToBasket(product)
        }
    }

    return (
        <ProductsGrid>
            {products.map(product => (
                <ProductCard key={product.id}>
                    <img src={Placeholder} alt={Placeholder}/>
                    <ProductCardBody>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductPrice>{product.price} {product.currency}</ProductPrice>
                        <ProductButton id={product.id} onClick={() => handleAddToCart(product)}>Add to Cart</ProductButton>
                    </ProductCardBody>
                </ProductCard>
            ))}
        </ProductsGrid>
    )
}

export default Product