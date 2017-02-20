import { createReducer } from '../utils';
import { SET_INITIAL_STATE } from '../actions/weather';

const initialState = {};

export default createReducer(initialState, {
  [SET_INITIAL_STATE]: (state, action) => {
    state = action.data;

    return state;
  },
})
