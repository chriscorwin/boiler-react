import React from 'react';
import ReactDOM from 'react-dom';

import {Person} from 'components/Person';
import {IntroCard} from 'components/IntroCard';

ReactDOM.render(
  <div className="slds">
    <IntroCard />
    <Person myName={"John"} myAge={32.5} />
  </div>,
  document.getElementById("exampleDiv")
);
