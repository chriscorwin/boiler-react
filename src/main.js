import React, { Component } from 'react';
import { render } from 'react-dom';
import Router, { Route, DefaultRoute, RouteHandler, browserHistory, Link } from 'react-router';

import { IntroCard } from 'components/IntroCard';

class Main extends Component {
  render() {
    return <div className="Main">
      hello world.
      <Link to="intro">Click here</Link>
    </div>;
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/intro" name="intro" component={IntroCard} />
  </Router>,
  document.getElementById("examples")
);
