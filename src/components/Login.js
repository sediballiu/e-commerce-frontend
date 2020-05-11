import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import instance from '../instance'

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        return (
            <Form 
            action=""
            style={{margin: "3rem"}}
            >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                style={{width:"fit-content"}} 
                type="text" 
                value={this.state.username}
                onChange={event => this.setState({ username: event.target.value })}
                placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                style={{width:"fit-content"}} 
                type="password" 
                value={this.state.password}
                onChange={event => this.setState({ password: event.target.value })}
                placeholder="Password" />
            </Form.Group>
            <Button onClick={(event) => {
                instance.post("/users/login", {
                    username: this.state.username,
                    password: this.state.password,
                })
                .then(res => {
                    console.log(res);
                    if(res.data.message === "Logged in"){
                        this.props.history.push('/store')
                    }else if(res.data === "WRONG PASSWORD!"){
                        alert("Wrong password, please try again!")
                    }
                })
                .catch(err => {
                    console.log(err.response)
                    alert("Server error: User does not exist!")
                })
                event.preventDefault()
            }} variant="primary" type="submit">
                Login
            </Button>
            {this.state.username}
            {this.state.password}
            </Form>
        )
    }
}
