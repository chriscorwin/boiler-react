import React, { Component } from 'react';

export class Col extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-col ' + (p.className || '')}>
      {p.children}
    </div>;
  }
}

export class Grid extends Component {
  render() {
    const p = this.props;
    return <div className={'slds-grid ' + (p.wrap ? 'slds-wrap ' : '') + (p.className || '')}>
      {p.children}
    </div>;
  }
}
