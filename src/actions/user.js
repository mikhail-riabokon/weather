export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const fetchUserData = () => {
  return (dispatch) => {
    /* eslint-disable */
    FB.api('/me', function(response) {
      if (response) {
        dispatch(setUserData(response));
      }
   });
  }
};
