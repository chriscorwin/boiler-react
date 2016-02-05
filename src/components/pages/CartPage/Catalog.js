import React, { Component } from 'react';

import { SLDSButton } from 'design-system-react';
import { Card, CardBody, Mediablock, MediablockBody, MediablockFigure } from 'components/Containers';

export class Catalog extends Component {
  renderList(products) {
    return products.map(this.renderProduct.bind(this));
  }

  renderProduct(product, productIndex) {
    const p = this.props;

    function onClick() {
      if (p.onSelectProduct) {
        p.onSelectProduct(product, productIndex);
      }
    }

    return <li className="slds-col slds-size--1-of-1 slds-medium-size--1-of-2 slds-p-around--small" key={`Catalog[${productIndex}].${product.title}`}>
      <Card>
        <CardBody>
          <Mediablock className="slds-media-center">
            <MediablockFigure className="slds-p-horizontal--medium">
              <img src={`/${product.image}`} alt={product.title} className="slds-icon slds-icon--large" />
            </MediablockFigure>
            <MediablockBody className="slds-align-middle">
              <h2><strong>{product.title}</strong></h2>
              <p>{product.description}</p>
            </MediablockBody>
            <MediablockFigure className="slds-align-middle">
              <SLDSButton variant="brand"
                  iconName="add" iconPosition="left"
                  label="Add"
                  onClick={onClick}
                  />
            </MediablockFigure>
          </Mediablock>
        </CardBody>
      </Card>
    </li>;
  }

  render() {
    return <ul className="slds-grid slds-wrap">
      {this.renderList(this.props.products)}
    </ul>;
  }
}
