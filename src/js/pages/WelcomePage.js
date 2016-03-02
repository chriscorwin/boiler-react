require('styles/main.scss');
import React, { Component } from 'react';
import {Button} from 'components';

export default class WelcomePage extends Component {
  greet = () => {
    console.log('hello there!');
  }

  render() {
    return <Button label="hi" handleClick={this.greet}/>
  }
}
