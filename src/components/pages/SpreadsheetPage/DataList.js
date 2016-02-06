import React, { Component } from 'react';

import Grid from 'design-system-react/lib/SLDSGrid';
const Col = Grid.Column;
import { Card, CardBody } from 'components/Containers';

export class DataList extends Component {
  renderField(data, fieldName, label, size, padRight) {
    return <Col className={`slds-size--1-of-${size} ${padRight ? 'slds-p-right--small' : ''}`}>
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor={fieldName}>{label}</label>
        <div className="slds-form-element__control">
          <input className="slds-input" type="text" value={data[fieldName]} readOnly={true} />
        </div>
      </div>
    </Col>;
  }

  renderCards(data) {
    return data.map((d, index) => <Card key={`DataList[${index}].${d.name}`}>
      <CardBody className="slds-p-horizontal--small">
        <form>
          <Grid className="slds-wrap">
            {this.renderField(d, 'name', 'Name', 2, true)}
            {this.renderField(d, 'company', 'Company', 2)}

            {this.renderField(d, 'address', 'Address', 4, true)}
            {this.renderField(d, 'city', 'City', 4, true)}
            {this.renderField(d, 'state', 'State', 4, true)}
            {this.renderField(d, 'postal_code', 'Postal Code', 4)}

            {this.renderField(d, 'phone', 'Phone', 2, true)}
            {this.renderField(d, 'country', 'Country', 2)}
          </Grid>
        </form>
      </CardBody>
    </Card>);
  }

  render() {
    return <ul>
      {this.renderCards(this.props.data)}
    </ul>;
  }
}
