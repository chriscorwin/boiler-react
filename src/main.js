import React, { Component } from 'react';
import { render } from 'react-dom';
import Router, { Route, DefaultRoute, RouteHandler, browserHistory } from 'react-router';

import { WelcomePage } from 'components/pages/WelcomePage';

render(
  <Router>
    <Route path="/" component={WelcomePage} />
  </Router>,
  document.getElementById("app")
);
