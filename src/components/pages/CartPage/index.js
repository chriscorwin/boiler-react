import React, { Component } from 'react';

import { Grid, Col } from 'components/Layout';
import { Catalog } from './Catalog';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';
import data from './data';

export class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  onDeleteProduct(product, productIndex) {
    let newProducts = [].concat(this.state.products);
    newProducts.splice(productIndex, 1);

    this.setState({
      products: newProducts
    });
  }

  onSelectProduct(product, productIndex) {
    this.setState({
      products: [].concat(this.state.products, product)
    });
  }

  render() {
    return <div className="CartPage">
      <Header />
      <Grid>
        <Col className="slds-p-around--large slds-size--2-of-3">
          <Catalog products={data} onSelectProduct={this.onSelectProduct.bind(this)} />
        </Col>
        <Col className="slds-p-around--large slds-size--1-of-3">
          <ShoppingCart products={this.state.products} onDeleteProduct={this.onDeleteProduct.bind(this)} />
        </Col>
      </Grid>
    </div>;
  }
}
