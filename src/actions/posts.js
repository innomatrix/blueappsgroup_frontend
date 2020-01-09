export function userPostsHasErrored(bool) {
  return {
    type: 'USER_POSTS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function userPostsIsLoading(bool) {
  return {
    type: 'USER_POSTS_IS_LOADING',
    isLoading: bool
  };
}
export function userPostsFetchDataSuccess(currentUserPosts) {
  return {
    type: 'USER_POSTS_FETCH_DATA_SUCCESS',
    currentUserPosts
  };
}

export function setCurrentUserPostDetails(currentUserPostDetails) {
  return {
    type: 'CURRENT_USER_POST_DETAILS_SET',
    currentUserPostDetails
  };
}

export const requestUserPosts = id => (
  (dispatch, getState, axios) => {
    dispatch(userPostsIsLoading(true));

    return axios.get('https://jsonplaceholder.typicode.com/posts/?userId=' + id)
      .then(res => {
        dispatch(userPostsIsLoading(false));
        dispatch(userPostsFetchDataSuccess(res.data));

        return res.data;
      }).catch(err => {
        dispatch(userPostsHasErrored(true));
      });
  }
);

export const requestCurrentUserPostDetails = id => (
  (dispatch, getState, axios) => {
    // dispatch(usersPostIsLoading(true));

    return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        // dispatch(usersIsLoading(false));
        dispatch(setCurrentUserPostDetails(res.data));
        // dispatch(addCurrentUserToState(res.data));

        return res.data;
      }).catch(err => {
        // dispatch(usersHasErrored(true));
      });
  }
);

export const filterCurrentUserPosts = id => (
  (dispatch, getState, axios) => { 

    const currentUsersPosts = getState().currentUserPosts;

    let currentUserPost = currentUsersPosts.filter(p => p.id === parseInt(id));

    if (currentUserPost.length > 0) {
      dispatch(setCurrentUserPostDetails(currentUserPost[0]));

      return currentUserPost[0];
    } else 
      dispatch(requestCurrentUserPostDetails(id));
  }
);

