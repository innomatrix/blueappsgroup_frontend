import { combineReducers } from 'redux';
import { users, usersHasErrored, usersIsLoading, currentUser } from './users';
import { userPostsHasErrored, userPostsIsLoading, currentUserPosts, currentUserPostDetails } from './userPosts';
import { usersPostCommentsIsLoading, usersPostCommentsHasErrored, currentUserPostComments } from './comments';
// import user from './user';
// import cart from './cart';

export default combineReducers({ 
  users,
  usersHasErrored,
  usersIsLoading,
  currentUser,
  userPostsHasErrored,
  userPostsIsLoading,
  currentUserPosts,
  currentUserPostDetails,
  usersPostCommentsIsLoading,
  usersPostCommentsHasErrored,
  currentUserPostComments
})