import React from 'react'
import Card from 'react-bootstrap/Card'
import './MainProducts.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import CardDeck from 'react-bootstrap/CardDeck'

export default function MainProducts() {
    return (
        <div style={{padding: "3rem"}}>
        <h1 className="text-center">Latest Products</h1>
        <CardDeck className="CardDeck">
        <Card style={{display: "inline-block"}}>
            <Card.Img variant="top" src="https://placeimg.com/500/400" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            <Link to="/store">
            <Button 
            variant="primary">Go To Store</Button>
            </Link>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Added to the Stock:  3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card style={{display: "inline-block"}}>
            <Card.Img variant="top" src="https://placeimg.com/500/400" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            <Link to="/store">
            <Button 
            variant="primary">Go To Store</Button>
            </Link>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Added to the Stock:  3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card style={{display: "inline-block"}}>
            <Card.Img variant="top" src="https://placeimg.com/500/400" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            <Link to="/store">
            <Button 
            variant="primary">Go To Store</Button>
            </Link>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Added to the Stock:  3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://placeimg.com/500/400" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            <Link to="/store">
            <Button 
            variant="primary">Go To Store</Button>
            </Link>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Added to the Stock:  3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardDeck>
        </div>
    )
}
