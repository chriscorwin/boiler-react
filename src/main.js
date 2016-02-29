import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { WelcomePage } from 'components/pages/WelcomePage';

render((
  <Router history={hashHistory}>
    <Route path="/" component={WelcomePage} />
  </Router>
), document.getElementById('app'))
