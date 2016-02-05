import React, { Component } from 'react';

import { SLDSButton } from 'design-system-react';
import { Mediablock, MediablockBody, MediablockFigure } from 'components/Containers';

export class ShoppingCart extends Component {
  renderCartDescription() {
    const numberProducts = (this.props.products || []).length;
    if (numberProducts) {
      const productWord = numberProducts === 1 ? 'product' : 'products';
      return `Your cart contains ${numberProducts} ${productWord}.`;
    } else {
      return `Your cart has no products.`;
    }
  }

  renderList(products) {
    return products.map(this.renderProduct.bind(this));
  }

  renderProduct(product, productIndex) {
    const p = this.props;

    function onClick() {
      if (p.onDeleteProduct) {
        p.onDeleteProduct(product, productIndex);
      }
    }

    return <li className="slds-list__item" key={`ShoppingCart[${productIndex}].${product.title}`}>
      <Mediablock className="slds-media-center">
        <MediablockFigure>
          <img src={`/${product.image}`} alt={product.title} className="slds-icon slds-icon--large" />
        </MediablockFigure>
        <MediablockBody className="slds-align-middle">
          <h2><strong>{product.title}</strong></h2>
          <p>{product.description}</p>
        </MediablockBody>
        <MediablockFigure className="slds-align-middle">
          <SLDSButton
              assistiveText="Remove product" iconName="delete" iconVariant="border-filled"
              onClick={onClick}
              variant="icon" />
        </MediablockFigure>
      </Mediablock>
    </li>;
  }

  render() {
    return <div className="slds-p-around--large">
      <p>
        {this.renderCartDescription()}
      </p>
      <ul className="slds-list--vertical slds-has-dividers--top-space slds-m-top--large">
        {this.renderList(this.props.products)}
      </ul>
    </div>;
  }
}
