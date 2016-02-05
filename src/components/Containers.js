import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-card ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}

export class CardBody extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-card__body ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}

export class Mediablock extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-media ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}

export class MediablockBody extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-media__body ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}

export class MediablockFigure extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-media__figure ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}
