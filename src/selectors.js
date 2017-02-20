import { createSelector } from 'reselect';
import moment from 'moment';
import _ from 'lodash';

export const placesSelector = createSelector(
  (state) => _.map(state, 'place_name'),
  (placeNames) => _.uniq(placeNames)
);

const weather = createSelector(
  (state) => state,
  (state) => state.weather
)

export const filteredResultsSelector = createSelector(
  (state) => state.weather

  (weather, filter) => {
    if (_.size(weather) === 0) return [];

    const datetime = moment(filter.date).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    const results = _.filter(weather, { datetime });

    debugger;

    return results

  },
  (weather, filter) => {
    debugger;
  }
);
