import React, { Component } from 'react';

import { SLDSMenuPicklist } from 'design-system-react';
import Grid from 'design-system-react/lib/SLDSGrid';
const Col = Grid.Column;

export class SortBy extends Component {
  getOptions() {
    return this.props.columns.map(column => { return { label: column, value: column } });
  }

  render() {
    const p = this.props;
    const options = this.getOptions(p.columns);

    return <div className="slds-p-around--medium">

      <SLDSMenuPicklist
          label="Sort first by"
          modal={true}
          onClick={() => {}}
          onSelect={(option) => { p.onSelect(1, option) }}
          onUpdateHighlighted={() => {}}
          options={options}
          placeholder = "Select the first sort column"
          value={p.columns[p.sortColumn1]}
          />
      <br />

      <SLDSMenuPicklist
          label="then sort by"
          modal={true}
          onClick={() => {}}
          onSelect={(option) => { p.onSelect(2, option) }}
          onUpdateHighlighted={() => {}}
          options={options}
          placeholder = "Select the secondary sort column"
          value={p.columns[p.sortColumn2]}
          />
    </div>;
  }
}
