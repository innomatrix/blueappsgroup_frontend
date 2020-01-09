export function usersHasErrored(bool) {
  return {
    type: 'USERS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function usersIsLoading(bool) {
  return {
    type: 'USERS_IS_LOADING',
    isLoading: bool
  };
}
export function usersFetchDataSuccess(users) {
  return {
    type: 'USERS_FETCH_DATA_SUCCESS',
    users
  };
}

export function setCurrentUser(currentUser) {
  return {
    type: 'CURRENT_USER_SET',
    currentUser
  };
}

export const requestUsers = () => (
  (dispatch, getState, axios) => {
    dispatch(usersIsLoading(true));

    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch(usersIsLoading(false));
        dispatch(usersFetchDataSuccess(res.data));

        return res.data;
      }).catch(err => {
        dispatch(usersHasErrored(true));
      });
  }
);

export const requestCurrentUser = id => (
  (dispatch, getState, axios) => {
    dispatch(usersIsLoading(true));

    return axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => {
        // dispatch(usersIsLoading(false));
        dispatch(setCurrentUser(res.data));
        // dispatch(addCurrentUserToState(res.data));

        return res.data;
      }).catch(err => {
        // dispatch(usersHasErrored(true));
      });
  }
);

export const filterUsers = id => (
  (dispatch, getState, axios) => {
    const users = getState().users;

    let currentUser = users.filter(u => u.id === parseInt(id));

    if(currentUser.length > 0) {
      dispatch(setCurrentUser(currentUser[0]));
      return currentUser[0];
    } else dispatch(requestCurrentUser(id));
    // return axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => {
    //     dispatch(usersIsLoading(false));
    //     dispatch(usersFetchDataSuccess(res.data));

    //     return res.data;
    //   }).catch(err => {
    //     dispatch(usersHasErrored(true));
    //   });
  }
);
