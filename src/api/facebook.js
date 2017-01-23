/* global FB */

const login = (scope = {}) => {
  return new Promise((resolve, reject) => {
    FB.login((response) => {
      if (response.status === 'connected') {
        resolve(response);
      } else {
        reject(response);
      }
    }, scope);
  });
};

const makeApiCall = (method) => {
  return new Promise((resolve, reject) => {
    FB.api(method, (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response);
      }
    });
  });
};

const getUserData = (authData = {}) => {
  return makeApiCall(`/${authData.userID}?access_token=${authData.accessToken}`);
};

const getUserPicture = (authData = {}, type='large') => {
  return makeApiCall(`/${authData.userID}/picture?access_token=${authData.accessToken}&type=${type}`);
};

export default {
  login,
  getUserData,
  getUserPicture,
}
