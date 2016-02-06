import React, { Component } from 'react';

import { SLDSButton, SLDSButtonGroup } from 'design-system-react';

export class RenderMode extends Component {
  render() {
    const mode = this.props.mode;
    const onSelect = this.props.onSelect;

    return <div className="slds-p-around--small">
      <SLDSButtonGroup className="slds-p-bottom--medium">
        <SLDSButton variant={mode === 'table' ? 'brand' : 'neutral'} onClick={() => { onSelect('table') }}>
          Table
        </SLDSButton>
        <SLDSButton variant={mode === 'cards' ? 'brand' : 'neutral'} onClick={() => { onSelect('cards') }}>
          Cards
        </SLDSButton>
      </SLDSButtonGroup>
    </div>;
  }
}
