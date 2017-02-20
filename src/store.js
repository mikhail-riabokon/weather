import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import * as reducers from './reducers';

const reducers = {};
const initialState = {};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(thunk)
);

window.store = store; // TODO: remove it;

export default store;
