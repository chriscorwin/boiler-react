import React from 'react';
import {SLDSPicklistBase} from 'design-system-react';

export class SLDSPicklistExamples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnUpdateHighlighted () {
    console.log('onUpdateHighlighted should be defined');
  }

  handleOnSelect(value) {
    console.log('selected: ',value);
  }

  handleOnClick() {
    console.log('onClick should be defined');
  }

  render(){

    const picklistOptions = [
      {label:'A Option Option Super Super Long',value:'A0', title: 'Greg'},
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


    return (
      <div>
       <h4 className="slds-text-heading--medium slds-p-vertical--medium">Picklists</h4>
       
       <SLDSPicklistBase
         label="Contacts"
         modal={true}
         onClick={this.handleOnClick}
         onSelect={this.handleOnSelect}
         onUpdateHighlighted={this.handleOnUpdateHighlighted}
         options={picklistOptions}
         placeholder = "Select a contact"
         value='C0'
         />
        
      </div>
    );
  }

};
