import { browserHistory } from 'react-router'
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
