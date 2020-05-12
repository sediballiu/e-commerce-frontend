import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

export default class Dashboard extends Component {
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
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
            </Table>
            </Container>
        )
    }
}
