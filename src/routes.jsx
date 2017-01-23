import React from 'react';
import { Route } from 'react-router';
import AppScreen from './screens/App';
import LoginScreen from './screens/App/screens/Login';
import MapScreen from './screens/App/screens/Map';

export default (
  <Route path="/" component={AppScreen}>
    <Route path="login" component={LoginScreen} />
    <Route path="map" component={MapScreen} />
  </Route>
);
