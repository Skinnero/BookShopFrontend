import "./Product.css"
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Placeholder from "../../mockdata/dummy_placeholder.png"
import {useEffect, useState} from "react";
import {getProduct} from "../../api/Product";

const Product = ({apiData}) => {

    return (
        <div className={"products"}>
            {apiData.map(product => (
                <Card className={"item"} key={product.id} id={product.id}>
                    <Card.Img variant={"top"} src={Placeholder}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle>{product.price} {product.currency}</Card.Subtitle>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant={"primary"}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Product