import facebookApi from '../api/facebook';

export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const fetchUserData = () => {
  return (dispatch, getState) => {
    const { auth } = getState();

    if (auth.accessToken && auth.userID) {
      Promise.all([
        facebookApi.getUserData(auth),
        facebookApi.getUserPicture(auth)
      ])
      .then((response) => {
        const data = {
          ...response[0],
          ...response[1],
        };

        dispatch(setUserData(data));
      })
      .catch((response) => {
        console.log('handle error', response);
      });
    }
  }
};
