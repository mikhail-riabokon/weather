import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
