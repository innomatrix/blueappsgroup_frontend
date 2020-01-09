export function userPostsHasErrored(state = false, action) {
  switch (action.type) {
    case 'USER_POSTS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
export function userPostsIsLoading(state = false, action) {
  switch (action.type) {
    case 'USER_POSTS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function currentUserPosts(state = [], action) {
  switch (action.type) {
    case 'USER_POSTS_FETCH_DATA_SUCCESS':
      return action.currentUserPosts;
    default:
      return state;
  }
}

export function currentUserPostDetails(state = {}, action) {
  switch (action.type) {
    case 'CURRENT_USER_POST_DETAILS_SET':
      return action.currentUserPostDetails;
    default:
      return state;
  }
}

// currentUserPostDetails