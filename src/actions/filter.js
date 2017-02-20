export const SET_DATE = 'SET_DATE';
export const SET_PLACE = 'SET_PLACE';

export const setDate = (date) => ({
  type: SET_DATE,
  date,
});

export const setPlace = (place) => ({
  type: SET_PLACE,
  place,
});
