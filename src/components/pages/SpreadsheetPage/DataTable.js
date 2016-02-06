import React, { Component } from 'react';

import { DataTableBody } from './DataTableBody';
import { DataTableHeader } from './DataTableHeader';

export class DataTable extends Component {
  render() {
    return <table className="slds-table slds-table--bordered" style={{ width: '100%' }}>
      <DataTableHeader columns={this.props.columns} />
      <DataTableBody data={this.props.data} columns={this.props.columns} />
    </table>;
  }
}
