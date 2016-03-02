import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    if(this.props.handleClick) {
      this.props.handleClick();
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.props.label}
      </button>
    );
  }
}

