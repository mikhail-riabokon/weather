import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers'
import thunk from 'redux-thunk';

const initialState = {};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunk)
);

window.store = store; // TODO remove it;

export default store;
