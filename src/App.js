import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import MainIntro from "./components/MainIntro"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Modal from "./components/Modal"
import Login from "./components/Login"
import Dashboard from './components/Dashboard/Dashboard'
import Default from "./components/Default"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainIntro} />
          <Route path="/store" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App;
