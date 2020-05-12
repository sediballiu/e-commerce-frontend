import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import instance from "../../instance"

export default class Dashboard extends Component {
    state = {
        allProducts: [],
    }
    componentDidMount(){
        this.getAllProducts();
    }
    getAllProducts(){
        instance.get("/products")
        .then(res => {
            this.setState({ allProducts: res.data })
        })
    }
    deleteProduct(id){
        instance.delete(`/products/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Container>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Left in Stock</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {this.state.allProducts.map(product => {
                    return (
                        <tr>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.leftInStock}</td>
                        <td>
                            <div  className="cart-icon" onClick={() => {
                                this.deleteProduct(product.id);
                                this.setState((prevState) => ({
                                    allProducts: prevState.allProducts.filter(item => item.id !== product.id)
                                }))
                                }
                                }>
                            <i className="fas fa-trash" />
                            </div>
                        </td>
                        </tr>
                    )
                })
                }
            </tbody>
            </Table>
            </Container>
        )
    }
}
