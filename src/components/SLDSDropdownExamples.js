import React from 'react';
import {SLDSMenuDropdown} from 'design-system-react';

export class SLDSDropdownExamples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnSelect(value) {
    console.log('selected: ',value);
  }

  handleMouseEnter() {
    console.log('onEnter should be defined');
  }

  handleMouseLeave() {
    console.log('onLeave should be defined');
  }

  handleOnClick() {
    console.log('onClick should be defined');
  }

  render() {
    
   const options = [
    {label:'A Option Option Super Super Long',value:'A0'},
    {label:'B Option',value:'B0'},
    {label:'C Option',value:'C0'},
    {label:'D Option',value:'D0'},
    {label:'E Option',value:'E0'},
    {label:'A1 Option',value:'A1'},
    {label:'B2 Option',value:'B1'},
    {label:'C2 Option',value:'C1'},
    {label:'D2 Option',value:'D1'},
    {label:'E2 Option Super Super Long',value:'E1'},
  ];

    return(
      <div>
        <h4 className="slds-text-heading--medium slds-p-vertical--medium">Dropdowns</h4>

        <SLDSMenuDropdown
          label="Dropdown Hover"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onSelect={this.handleOnSelect}
          options={options}
          value='C0' />

        <SLDSMenuDropdown
          label="Dropdown Click"
          onClick={this.handleOnClick}
          onSelect={this.handleOnSelect}
          openOn="click"
          options={options}
          value='C0'
          variant="brand" />
      </div>
    );

  }
};
