import React, { Component } from 'react';

import SLDSNotification from 'components/new-components/SLDSNotification';
import Grid from 'design-system-react/lib/SLDSGrid';
const Col = Grid.Column;
import { Catalog } from './Catalog';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';
import data from './data';

const NOTIFICATION_DURATION = 3 * 1000;

export class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {
        content: '',
        isOpen: false,
        theme: 'success'
      },
      products: []
    };
  }

  onDeleteProduct(product, productIndex) {
    let n = Object.assign({}, this.state.notification, {
      theme: 'warning',
      content: `Removed ${product.title} from cart`,
      isOpen: true
    });

    let newProducts = [].concat(this.state.products);
    newProducts.splice(productIndex, 1);

    this.setState({
      products: newProducts,
      notification: n
    });
  }

  onDismissNotification() {
    let n = Object.assign({}, this.state.notification, {
      isOpen: false
    });
    this.setState({ notification: n });
  }

  onSelectProduct(product, productIndex) {
    let n = Object.assign({}, this.state.notification, {
      theme: 'success',
      content: `Added ${product.title} to cart`,
      isOpen: true
    });
    this.setState({
      products: [].concat(this.state.products, product),
      notification: n
    });
  }

  render() {
    const n = this.state.notification;
    return <div className="CartPage">
      <SLDSNotification variant="toast" iconName="notification" theme={n.theme}
          content={n.content} isOpen={n.isOpen}
          onDismiss={this.onDismissNotification.bind(this)}
          duration={NOTIFICATION_DURATION}
          />
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
