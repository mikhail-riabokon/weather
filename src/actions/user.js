export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const fetchUserData = () => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.auth.accessToken) {
      /* eslint-disable */
      FB.api(`/${state.auth.userID}/picture/type="small"&access_token=${state.auth.accessToken}`, function(response) {
        if (response && !response.error) {
          dispatch(setUserData(response));
        }
     });
    }
  }
};
