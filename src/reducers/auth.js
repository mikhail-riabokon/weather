import { createReducer } from '../utils';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/auth';

const initialState = { isAuthenticated: false };

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      ...action.data
    }
  },
  [LOGIN_FAIL]: (state, action) => ({
    ...state,
    isAuthenticated: false,
  }),
});
