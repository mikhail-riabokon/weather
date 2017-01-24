import { createReducer } from '../utils';
import { SET_USER_DATA, USER_GEO_LOCATION_ERROR } from '../actions/user';

const initialState = {
  geolocation: {},
};

export default createReducer(initialState, {
  [SET_USER_DATA]: (state, action) => ({
    ...state,
    ...action.data
  }),
  [USER_GEO_LOCATION_ERROR]: (state, action) => ({
    ...state,
    geolocation: {
      error: action.error,
    },
  }),
});
