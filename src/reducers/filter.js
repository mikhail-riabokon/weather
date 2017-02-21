import { createReducer } from '../utils';
import { SET_DATE, SET_PLACE } from '../actions/filter';

const initialState = {
  date: 1407445200000, //Date where data is available
  place: '',
};

export default createReducer(initialState, {
  [SET_DATE]: (state, action) => ({
    ...state,
    date: action.date,
  }),
  [SET_PLACE]: (state, action) => ({
    ...state,
    place: action.place
  }),
});
