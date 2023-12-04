import Header from "../header/Header.js"
import Footer from "../footer/Footer.js"
import Filter from "../filter/Filter";
import Product from "../product/Product";
import Ad from "../ad/Ad";
import {useEffect, useState} from "react";
import {useApi} from "../../hook/UseApi";
import {HomePageGrid, MainContentGrid} from "./HomePage.styles";

const HomePage = () => {
    const {get} = useApi()
    const [products, setProducts] = useState([])

    useEffect(() => {
        get("/api/v1/products").then(response => setProducts(response))
    }, []);

    return (
        <HomePageGrid>
            <Header/>
            <MainContentGrid>
                <Filter setProducts={setProducts}/>
                <Product products={products}/>
                <Ad/>
            </MainContentGrid>
            <Footer/>
        </HomePageGrid>
    )
}

export default HomePage