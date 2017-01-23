import { createReducer } from '../utils';
import { SET_USER_DATA } from '../actions/user';

const initialState = {};

export default createReducer(initialState, {
  [SET_USER_DATA]: (state, action) => ({
    ...state,
    ...action.data
  }),
});
