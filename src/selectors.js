import { createSelector } from 'reselect';
import _ from 'underscore';

export const placesSelector = createSelector(
  (state) => _.pluck(state, 'place_name'),
  (placeNames) => _.uniq(placeNames)
);
