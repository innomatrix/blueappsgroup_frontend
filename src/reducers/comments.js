export function usersPostCommentsHasErrored(state = false, action) {
  switch (action.type) {
    case 'USER_POST_COMMENTS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function usersPostCommentsIsLoading(state = false, action) {
  switch (action.type) {
    case 'USER_POST_COMMENTS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function currentUserPostComments(state = [], action) {
  switch (action.type) {
    case 'USER_POST_COMMENTS_FETCH_DATA_SUCCESS':
      return action.currentUserPostComments;
    default:
      return state;
  }
}