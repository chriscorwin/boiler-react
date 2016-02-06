import React, { Component } from 'react';

export class DataTableHeader extends Component {
  renderColumn(key) {
    return <th scope="col" key={`DataTableHeader.${key}`}>
      {key}
    </th>;
  }

  render() {
    return <thead>
      <tr className="slds-text-heading--label">
        {this.props.columns.map(key => this.renderColumn(key))}
      </tr>
    </thead>;
  }
}
