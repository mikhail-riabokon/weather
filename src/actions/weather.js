export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

export const setInitialState = (initialState) => ({
  type: SET_INITIAL_STATE,
  data: initialState,
});

export const getInitialState = () => {
  return (dispath) => {
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch('/data.json', options)
      .then((response) => response.json())
      .then((responseJSON) => {
        window.responseJSON = responseJSON;

        dispath(setInitialState(responseJSON))
      })
  };
};
