import React, { Component } from 'react';

import { SLDSLookup } from 'design-system-react';

export class StateLookup extends Component {
  getItems(data) {
    const sortedByState = data.map(d => d.state).sort();
    const uniqueStates = [...new Set(sortedByState)];
    return uniqueStates.map(i => { return {label: i} });
  }

  render() {
    return <SLDSLookup
            options={this.getItems(this.props.data)}
            label="State Search"
            iconCategory='action'
            iconName='map'
            salesforceObj="map"
            footerRenderer={SLDSLookup.DefaultFooter}
            headerRenderer={SLDSLookup.DefaultHeader}
            emptyMessage="No items found"
            hasError={false}
            onChange={this.props.onChange}
            onItemSelect={this.props.onSelect}
          />;
  }
}
