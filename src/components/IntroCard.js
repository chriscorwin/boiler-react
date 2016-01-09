import React from 'react';
import {SLDSIcons} from 'design-system-react';

export class IntroCard extends React.Component {

  render() {
    return (
      <div className="slds-col--padded slds-size--1-of-1 slds-large-size--8-of-12">
        <div className="slds-card slds-theme--alert-texture">
          <div className="slds-card__header slds-grid">
            <div className="slds-media slds-media-center">
              <div className="slds-media__figure">
                <SLDSIcons.Icon assistiveText=""
                    category="utility"
                    className="slds-icon-text-default"
                    name="like"
                    size="small" />
              </div>
              <div className="slds-media__body">
                <h2 className="slds-text-heading--small slds-truncate">Card Header (2)</h2>
              </div>
            </div>
          </div>  
          <p className="slds-text-body--small slds-m-horizontal--small">Internal development builds are available for use by internal customers. These reflect the state of the Salesforce product in future releases, and are prone to change in accordance with shifting priorities and designs throughout a release, and may contain components that we do not yet want to surface to external partners and customers.</p>
        </div>
      </div>
    )
  }
}
