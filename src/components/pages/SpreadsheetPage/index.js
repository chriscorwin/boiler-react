import React, { Component } from 'react';

import Grid from 'design-system-react/lib/SLDSGrid';
const Col = Grid.Column;
import { DataList } from './DataList';
import { DataTable } from './DataTable';
import { RenderMode } from './RenderMode';
import { SortBy } from './SortBy';
import data from './data';

export class SpreadsheetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn1: 0,
      sortColumn2: 1,
      renderMode: 'table'
    };
  }

  getColumns(data) {
    const firstRow = data[0] || {};
    return Object.keys(firstRow).sort();
  }

  getSortedData(data) {
    const columns = this.getColumns(data);
    const key1 = columns[this.state.sortColumn1];
    const key2 = columns[this.state.sortColumn2];

    return data.sort((a, b) => {
      if (a[key1] == b[key1]) {
        if (a[key2] == b[key2]) {
          return 0
        } else {
          return a[key2] < b[key2] ? -1 : 1;
        }
      } else {
        return a[key1] < b[key1] ? -1 : 1;
      }
    });
  }

  onSelectColumn(columnIndex, option) {
    const columns = this.getColumns(data);
    const index = columns.findIndex(column => column == option.value);
    this.setState({
      [`sortColumn${columnIndex}`]: index
    });
  }

  onSelectRenderMode(mode) {
    this.setState({
      renderMode: mode
    });
  }

  renderData(mode, columns, sortedData) {
    return mode === 'table' ? <DataTable columns={columns} data={sortedData} /> : <DataList data={sortedData} />;
  }

  render() {
    const columns = this.getColumns(data);
    const sortedData = this.getSortedData(data);

    return <div className="SpreadsheetPage">
      <h1 className="slds-text-heading--large">Spreadsheet Test</h1>
      <Grid>
        <Col className="slds-size--1-of-4">
          <SortBy columns={columns}
              sortColumn1={this.state.sortColumn1} sortColumn2={this.state.sortColumn2}
              onSelect={this.onSelectColumn.bind(this)} />

          <RenderMode mode={this.state.renderMode} onSelect={this.onSelectRenderMode.bind(this)} />
        </Col>
        <Col className="slds-size--3-of-4 slds-scrollable--x">
          {this.renderData(this.state.renderMode, columns, sortedData)}
        </Col>
      </Grid>
    </div>;
  }
}
