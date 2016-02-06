import React, { Component } from 'react';
import { Link } from 'react-router';

import Grid from 'design-system-react/lib/SLDSGrid';
const Col = Grid.Column;

export class WelcomePage extends Component {
  render() {
    return <div className="WelcomePage">
      <div className="slds-p-around--large slds-text-align--center">
        <h1 className="slds-text-heading--large">Design System React Examples</h1>
      </div>
      <Grid>
        <Col className="slds-p-around--large">
          <div className="slds-card">
            <div className="slds-card__header">
              <h2 className="slds-text-heading--medium">
                <Link to="cart">Shopping Cart Example</Link>
              </h2>
            </div>
            <div className="slds-card__body slds-p-around--small">
              An interactive shopping cart.
            </div>
          </div>
        </Col>
        <Col className="slds-p-around--large">
          <div className="slds-card">
            <div className="slds-card__header">
              <h2 className="slds-text-heading--medium">
                <Link to="spreadsheet">Spreadsheet Example</Link>
              </h2>
            </div>
            <div className="slds-card__body slds-p-around--small">
              An interactive, sortable table.
            </div>
          </div>
        </Col>
        <Col className="slds-p-around--large">
          <div className="slds-card">
            <div className="slds-card__header">
              <h2 className="slds-text-heading--medium">e1</h2>
            </div>
            <div className="slds-card__body slds-p-around--small">
              asldjfa;lksdjf;klasjdf;ljka
            </div>
          </div>
        </Col>
      </Grid>
    </div>;
  }
}
