import { createReducer } from '../utils';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/auth';

const initialState = { isAuthenticated: false };

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, action) => state,
  [LOGIN_FAIL]: (state, action) => state,
});
