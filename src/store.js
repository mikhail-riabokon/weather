import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const auth = JSON.parse(localStorage.getItem('auth')) || {};
const initialState = {
  auth: {
    ...auth,
    isAuthenticated: Boolean(auth.accessToken),
  },
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunk)
);

window.store = store; // TODO: remove it;

export default store;
