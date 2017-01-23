export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
// export const NOT_AUTHORIZED = 'NOT_AUTHORIZED';

const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
// const notAuthorized = () => ({ type: NOT_AUTHORIZED });

export const loginViaFacebook = () => {
  return (dispatch, getState) => {
    const state = getState();

    if (state.auth.isAuthenticated) {
      dispatch(loginSuccess());
    } else {
      /* eslint-disable */
      FB.login((response) => {
        if (response.status === 'connected') {
          localStorage.setItem('accessToken', response.authResponse.accessToken); // TODO change to BE
          dispatch(loginSuccess(response.authResponse));
        }
      });
    }
  };
};
