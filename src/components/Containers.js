import React, { Component } from 'react';

function renderDivWithBaseClass(className, componentProps) {
  return <div className={`${className} ${componentProps || ''}`}>
    {componentProps.children}
  </div>;
}

export class Card extends Component {
  render() { return renderDivWithBaseClass('slds-card', this.props); }
}

export class CardBody extends Component {
  render() { return renderDivWithBaseClass('slds-card__body', this.props); }
}

export class Mediablock extends Component {
  render() { return renderDivWithBaseClass('slds-media', this.props); }
}

export class MediablockBody extends Component {
  render() { return renderDivWithBaseClass('slds-media__body', this.props); }
}

export class MediablockFigure extends Component {
  render() { return renderDivWithBaseClass('slds-media__figure', this.props); }
}
