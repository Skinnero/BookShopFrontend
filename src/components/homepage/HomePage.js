import Header from "../header/Header.js"
import Footer from "../footer/Footer.js"
import Filter from "../filter/Filter";
import Product from "../product/Product";
import Ad from "../ad/Ad";
import "./HomePage.css"
import {useEffect, useState} from "react";
import {getProduct} from "../../api/Product";

const HomePage = () => {
    const [apiData, setApiData] = useState([])

    const updateApiData = (data) => {
        setApiData(data)
    }

    useEffect(() => {
        getProduct().then(response => setApiData(response))
    }, []);

    return (
        <div>
            <Header/>
            <div className={"main"}>
                <Filter updateApiData={updateApiData}/>
                <Product apiData={apiData}/>
                <Ad/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage