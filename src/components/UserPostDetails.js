import React, { Component } from 'react';

// import axios from 'axios';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { filterUsers } from './../actions/users';
import { filterCurrentUserPosts } from './../actions/posts';
import { requestUserPostComments } from './../actions/comments';

import { ReactComponent as GoBackBtn } from './../assets/arrow_back.svg';
import { ReactComponent as ArrowRightBtn } from './../assets/add_button.svg';

import UserPostComments from "./UserPostComments";

class UserPostDetails extends Component {

  componentDidMount() {
    var userId = this.props.match.params.slug;
    var postId = this.props.match.params.post;
    this.props.setCurrentUser(userId);
    this.props.setCurrentUserPost(postId);
    this.props.setCurrentUserPostComments(postId);
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading!</p>;
    }

    if (this.props.user !== null)
      return (
        <div className="fullWidth">
          <div className="userName row">
            <Link to={{ pathname: "/users/" + this.props.user.id }} className="goBackArrowBtn">
              <GoBackBtn height="32" width="32" fill="white" /><span>Back</span>
            </Link>

            <span className="middle">{ this.props.user.name }</span>
            <ArrowRightBtn className="arrowRight" height="32" width="32" fill="white" />
          </div>
          <div className="row postTitle">
            { this.props.post.title }
          </div>
          <div className="row postBody">
            { this.props.post.body }
          </div>    
          <UserPostComments />               
        </div>
      )
    else
      return(
        <div>No user data!</div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    post: state.currentUserPostDetails,
    currentUserPosts: state.currentUserPosts,
    currentUserPostComments: state.currentUserPostComments,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (userId) => dispatch(filterUsers(userId)),
    setCurrentUserPost: (postId) => dispatch(filterCurrentUserPosts(postId)),
    setCurrentUserPostComments: (postId) => dispatch(requestUserPostComments(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPostDetails);