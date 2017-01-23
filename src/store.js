import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const accessToken = localStorage.getItem('accessToken');
const initialState = {
  auth: {
    accessToken: accessToken,
    isAuthenticated: Boolean(accessToken),
  },
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunk)
);

export default store;
