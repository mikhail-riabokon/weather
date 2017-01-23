import { createReducer } from '../utils';
import { LOGIN_SUCCESS, LOG_OUT } from '../actions/auth';

const initialState = { isAuthenticated: false };

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    ...action.data
  }),
  [LOG_OUT]: (state, action) => ({
    ...state,
    isAuthenticated: false,
  }),
});
