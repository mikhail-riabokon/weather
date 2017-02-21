import { createReducer } from '../utils';
import { TOOGLE_WEATHER_DETAILS } from '../actions/modalWindow';

const initialState = {
  weatherDetailsModalWindow: {
    isOpen: false,
    details: {},
  },
};

export default createReducer(initialState, {
  [TOOGLE_WEATHER_DETAILS]: (state, action) => ({
    ...state,
    weatherDetailsModalWindow: {
      details: {},
      ...action.data,
    },
  }),
});
