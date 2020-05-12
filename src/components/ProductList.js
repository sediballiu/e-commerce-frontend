import React, { Component } from 'react'
import Product from "./Product.js"
import Title from "./Title"
import {ProductConsumer} from "../context"

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="our " title="products" />
                <div className="row">
                <ProductConsumer>
                    {(value) => {
                        if(this.props.productsToShow){
                        return value.products.slice(0,this.props.productsToShow).map(product => {
                            return <Product product={product} key={product.id} />
                        })}else{
                            return value.products.map(product => {
                            return <Product product={product} key={product.id} />
                        })}
                    }}
                </ProductConsumer>
                </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
