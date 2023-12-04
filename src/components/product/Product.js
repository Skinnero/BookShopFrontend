import Placeholder from "../../mockdata/dummy_placeholder.png"
import {ProductButton, ProductCard, ProductCardBody, ProductPrice, ProductsGrid, ProductTitle} from "./Product.styles";
import {useJsCookie} from "../../hook/UseJsCookie";
import {BASKET} from "../../constants/Cookies";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext";

const Product = ({products}) => {
    const {user, addToBasket} = useContext(UserContext)
    const {setCookie: setBasket, getCookie: getBasket} = useJsCookie(BASKET)

    const handleAddToCart = (product) => {
        if (!user.id) {
            if (!getBasket()) {
                setBasket(JSON.stringify([product]))
            } else {
                const oldBasket = JSON.parse(getBasket())
                oldBasket.push(product)
                setBasket(JSON.stringify(oldBasket))
            }
        } else {
            addToBasket(product)
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