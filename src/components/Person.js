import React from 'react';
import {SLDSIcons} from 'design-system-react';

export class Person extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.myName}</div>
        <div>Age: {this.props.myAge}</div>
        <SLDSIcons.Icon assistiveText=""
          category="utility"
          className="slds-icon-text-default"
          name="like"
          size="large" />
      </div>
    );
  }
}
