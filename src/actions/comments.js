export function userPostCommentsHasErrored(bool) {
  return {
    type: 'USER_POST_COMMENTS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function userPostCommentsIsLoading(bool) {
  return {
    type: 'USER_POST_COMMENTS_IS_LOADING',
    isLoading: bool
  };
}
export function userPostCommentsFetchDataSuccess(currentUserPostComments) {
  return {
    type: 'USER_POST_COMMENTS_FETCH_DATA_SUCCESS',
    currentUserPostComments
  };
}

export const requestUserPostComments = id => (
  (dispatch, getState, axios) => {
    // dispatch(usersPostCommentsIsLoading(true));

    return axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .then(res => {
        // dispatch(usersPostCommentsIsLoading(false));
        dispatch(userPostCommentsFetchDataSuccess(res.data));
        // dispatch(addCurrentUserToState(res.data));

        return res.data;
      }).catch(err => {
        // dispatch(usersPostCommentsHasErrored(true));
      });
  }
);