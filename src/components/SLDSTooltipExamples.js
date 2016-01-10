import React from 'react';
import {SLDSTooltip, SLDSIcons, SLDSButton} from 'design-system-react';

export class SLDSTooltipExamples extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <h4 className="slds-text-heading--medium slds-p-vertical--medium">Tooltips</h4>

        <div ref="tooltipOnHover" className="slds-p-horizontal--medium" style={{ "display": "inline-block"}}>
          <SLDSTooltip
            align="top"
            content={<span>Tooltip on top</span>}
            targetElement={this.refs.tooltipOnHover}>
              <a href="javascript:void(0)">
                <SLDSIcons.Icon assistiveText="info" category="utility" name="info" className="slds-icon-text-default" />
              </a>
            </SLDSTooltip>
        </div>

        <div ref="tooltipOnClick" className="slds-p-horizontal--medium" style={{ "display": "inline-block"}}>
          <SLDSTooltip
            align="right"
            content={<span>Tooltip with right alignment</span>}
            openByDefault={true}
            targetElement={this.refs.tooltipOnClick}>
              <SLDSButton variant="brand" label="Hover to Open" />
            </SLDSTooltip>
        </div>
      </div>
    );
  }
};
