import facebookApi from '../api/facebook';
import { logOut } from './auth';

export const SET_USER_DATA = 'SET_USER_DATA';
export const USER_GEO_LOCATION_ERROR = 'USER_GEO_LOCATION_ERROR';

const getUserLocationError = (error) => ({
  type: USER_GEO_LOCATION_ERROR,
  error,
});

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
          picture: response[1].data,
        };

        dispatch(setUserData(data));
      })
      .catch((response) => {
        console.log('handle error', response);
        dispatch(logOut());
      });
    }
  }
};



export const getUserLocation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        console.log('ress');
      },
      (error) => {
        console.log('res s', error);

        dispatch(getUserLocationError(error));
      },
      {
        timeout: 1000,
      }
    );
  };
};
