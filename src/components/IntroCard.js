import React from 'react';

export class IntroCard extends React.Component {

  render() {
    return (
      <div className="slds-col--padded slds-size--1-of-1 slds-large-size--8-of-12">
        <div className="slds-card slds-theme--alert-texture">
          <div className="slds-card__header slds-grid">
            <h3 className="slds-text-heading--small">Internal Development</h3>
          </div>
          <p className="slds-text-body--small slds-m-horizontal--small">Internal development builds are available for use by internal customers. These reflect the state of the Salesforce product in future releases, and are prone to change in accordance with shifting priorities and designs throughout a release, and may contain components that we do not yet want to surface to external partners and customers.</p>
        </div>
      </div>
    )
  }
}
