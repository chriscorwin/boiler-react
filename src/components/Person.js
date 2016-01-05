import React from 'react';
import {Icon} from 'design-system-react';

export class Person extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.myName}</div>
        <div>Age: {this.props.myAge}</div>
        <Icon />
      </div>
    );
  }
}
