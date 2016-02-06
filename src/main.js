import React, { Component } from 'react';
import { render } from 'react-dom';
import Router, { Route, DefaultRoute, RouteHandler, browserHistory } from 'react-router';

import { CartPage } from 'components/pages/CartPage';
import { IntroCard } from 'components/pages/IntroCard';
import { SpreadsheetPage } from 'components/pages/SpreadsheetPage';
import { WelcomePage } from 'components/pages/WelcomePage';

render(
  <Router history={browserHistory}>
    <Route path="/" component={WelcomePage} />
    <Route path="/intro" name="intro" component={IntroCard} />
    <Route path="/cart" name="cart" component={CartPage} />
    <Route path="/spreadsheet" name="spreadsheet" component={SpreadsheetPage} />
  </Router>,
  document.getElementById("examples")
);
