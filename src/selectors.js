import { createSelector } from 'reselect';
import moment from 'moment';
import _ from 'lodash';

export const placesSelector = createSelector(
  (state) => _.map(state, 'place_name'),
  (placeNames) => _.uniq(placeNames)
);

const weatherByDateSelector = createSelector(
  ({ weather, filter }) => ({ weather, filter }),
  ({ weather, filter }) => {
    if (_.size(weather) === 0) return [];

    const datetime = moment(filter.date).startOf('day').format('YYYY-MM-DD HH:mm:ss');

    return _.filter(weather, { datetime });
  }
);

const filterPlaceSelector = createSelector(
  ({ filter }) => filter,
  (filter) => filter.place
);

export const filteredResultsSelector = createSelector(
  weatherByDateSelector,
  filterPlaceSelector,
  (weatherByDate, place) => {
    if (_.size(weatherByDate) === 0) return [];

    return place
      ? _.filter(weatherByDate, { place_name: place })
      : weatherByDate;
  }
);
