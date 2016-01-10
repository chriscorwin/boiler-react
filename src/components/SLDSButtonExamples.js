import React from 'react';
import {SLDSButton, SLDSButtonStateful} from 'design-system-react';

export class SLDSButtonExamples extends React.Component {

  
  handleClick(buttonInstance) {
    return function() {
      alert(buttonInstance + " Button Clicked");
     };
  };

  render() {
    
    // for buttons
    const inverseBtnParent = {backgroundColor: "#16325c", padding: "10px", display: "inline-block"};

    // for icon buttons
    let hintBtnParent = {backgroundColor: "#7fdbff", padding: "10px 50px", display: "inline-block"};

    return (
      <div className="buttons">
        <div className="slds-x-small-buttons--horizontal">
          <h4 className="slds-text-heading--medium slds-p-vertical--medium">Standard Buttons</h4>

          <SLDSButton
            label="Base"
            onClick={this.handleClick("Base")} />

          <SLDSButton
            label="Neutral"
            onClick={this.handleClick("Neutral")}
            variant="neutral" />

          <SLDSButton
                iconName="download"
                iconPosition="left"
                label="Neutral Icon"
                onClick={this.handleClick("Neutral Icon")}
                variant="neutral" />

          <SLDSButton
            label="Responsive"
            onClick={this.handleClick("Responsive")}
            responsive={true}
            variant="neutral" />

          <SLDSButton
            label="Brand"
            onClick={this.handleClick("Brand")}
            variant="brand" />

          <SLDSButton
            disabled={true}
            label="Disabled"
            onClick={this.handleClick("Disabled")}
            variant="brand" />

          <SLDSButton
            label="Destructive"
            onClick={this.handleClick("Destructive")}
            variant="destructive" />

          <div style={inverseBtnParent} className="slds-m-horizontal--small">
            <SLDSButton
              label="Inverse"
              onClick={this.handleClick("Inverse")}
              variant="inverse"/>
          </div>

        </div>

        <div className="slds-x-small-buttons--horizontal">
          <h4 className="slds-text-heading--medium slds-p-vertical--medium">Icon Buttons</h4>
          <SLDSButton
            assistiveText="Icon Bare Small"
            iconName="settings"
            iconSize="small"
            iconVariant="bare"
            onClick={this.handleClick("Icon Bare")} variant="icon" />

          <SLDSButton
            assistiveText="Icon Container Small"
            iconName="settings"
            iconSize="small"
            iconVariant="container"
            onClick={this.handleClick("Icon Container")}
            variant="icon" />

          <SLDSButton
            assistiveText="Icon Border medium"
            iconName="settings"
            iconVariant="border"
            onClick={this.handleClick("Icon border")}
            variant="icon" />

          <SLDSButton
            assistiveText="Icon Border-filled medium"
            iconName="settings"
            iconVariant="border-filled"
            onClick={this.handleClick("Icon border-filled")}
            variant="icon" />

          <SLDSButton
            assistiveText="Icon More large"
            iconName="settings"
            iconSize="large"
            iconVariant="more"
            onClick={this.handleClick("Icon More")}
            variant="icon" />

          <div style={inverseBtnParent} className="slds-m-horizontal--small">
            <SLDSButton
              assistiveText="Icon inverse"
              iconName="settings"
              iconSize="large"
              onClick={this.handleClick("Icon Inverse")}
              variant="icon-inverse" />
          </div>
          <div style={hintBtnParent} className="slds-hint-parent slds-m-horizontal--small">
            <SLDSButton
              assistiveText="Icon hint large"
              hint={true}
              iconName="settings"
              iconSize="large"
              onClick={this.handleClick("Icon Hint")}
              variant="icon" />
          </div>
        </div>

        <div className="slds-x-small-buttons--horizontal">
          <h4 className="slds-text-heading--medium slds-p-vertical--medium">Stateful Buttons</h4>
          <SLDSButtonStateful
            assistiveText="like"
            iconName="like"
            iconSize="large"
            type="icon" />

          <SLDSButtonStateful
            type="follow"/>

          <SLDSButtonStateful
            disabled={true}
            type="follow"/>

          <div style={inverseBtnParent} className="slds-m-horizontal--small">
            <SLDSButtonStateful
              type="join"
              variant="inverse" />
          </div>
        </div>
      </div>
    );
  }
};
