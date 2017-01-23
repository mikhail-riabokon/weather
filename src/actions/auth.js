import facebookApi from '../api/facebook';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginSuccess = (data = {}) => ({ type: LOGIN_SUCCESS, data });

export const loginViaFacebook = () => {
  return (dispatch, getState) => {
    const state = getState();

    if (!state.auth.isAuthenticated) {
      facebookApi.login({ scope: 'public_profile' })
        .then((response) => {
          localStorage.setItem('auth', JSON.stringify(response.authResponse));
          dispatch(loginSuccess(response.authResponse));
        })
        .catch((response) => {
          console.log('login error', response);
        });
    }
  };
};
