export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const fetchUserData = () => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.auth.accessToken) {
      console.log('fetch data');

      /* eslint-disable */
    //   FB.api(`/me/?access_token=${state.auth.accessToken}`, function(response) {
    //     if (response) {
    //       console.log('response 1', response);
     //
    //       dispatch(setUserData(response));
    //     }
    //  });
    }
  }
};
