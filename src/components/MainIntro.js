import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import MainProducts from './MainProducts'
import "./MainProducts.css"
import { Link } from 'react-router-dom'

export default function MainIntro() {
    return (
        <React.Fragment>
        <Carousel indicators="false" >
        <Carousel.Item>
            <img
            className="d-block w-100 h-50"
            src="https://placeimg.com/1300/600"
            alt="First slide"
            />
            <Link to="/store">
            <Button 
            style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}} 
            variant="primary">Start Shopping</Button></Link>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://placeimg.com/1300/600"
            alt="Third slide"
            />
            <Link to="/store">
            <Button 
            style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}} 
            variant="primary">Check Our Products</Button></Link>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://placeimg.com/800/400?text=Third slide&bg=20232a"
            alt="Third slide"
            />
            <Link to="/store">
            <Button 
            style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}} 
            variant="primary">Go To Store</Button></Link>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <MainProducts />
        </React.Fragment>
    )
}
