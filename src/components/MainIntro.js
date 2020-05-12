import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import ProductList from "./ProductList"
import { Link } from 'react-router-dom'

export default function MainIntro() {
    return (
        <React.Fragment>
        <Carousel indicators={false} controls={false}>
        <Carousel.Item>
            <img
            className="d-block w-100 h-50"
            style={{maxHeight: "70vh"}}
            src="img/slider-i-gjer-3.jpg"
            alt="First slide"
            />
            <h1
            className="text-center text-uppercase" 
            style={{
                position: "absolute", 
                color: "var(--mainDark)",
                float: "left",
                transform: "translate(-50%, -50%)", 
                top: "20%", 
                left: "70%"}} >bli online <br /> ne dyqanin tuaj</h1>
            <Link to="/store">
            <Button 
            style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "70%"}} 
            variant="primary">Start Shopping</Button></Link>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        {/* Show only a specific number of products in the main page */}
        <ProductList productsToShow={5} />
        </React.Fragment>
    )
}
