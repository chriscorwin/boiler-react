import React from 'react';
import ReactDOM from 'react-dom';

import {PersonComponent} from 'helper_module';

ReactDOM.render(
  <PersonComponent myName={"John"} myAge={32.5} />,
  document.getElementById("exampleDiv")
);
