import React, { Component } from 'react';

export class DataTableBody extends Component {
  renderColumn(column, columnIndex, row, rowIndex) {
    return <td key={`DataTableBody[${rowIndex}].${column}`} data-label={column}>
      <p className="slds-truncate">{row[column]}</p>
    </td>;
  }

  renderRows(columns, rowData) {
    return rowData.map((row, rowIndex) => {
      return <tr key={`DataTableBody[${rowIndex}]`}>
        {columns.map((column, columnIndex) => this.renderColumn(column, columnIndex, row, rowIndex))}
      </tr>;
    });
  }

  render() {
    return <tbody>
      {this.renderRows(this.props.columns, this.props.data)}
    </tbody>;
  }
}
