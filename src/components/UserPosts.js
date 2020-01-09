import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as DeletePostBtn } from './../assets/delete_icon.svg';
import { ReactComponent as AddPostBtn } from './../assets/arrow_right.svg';

class UserPosts extends Component {

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    if (this.props.currentUserPosts.length) {
      return (
          this.props.currentUserPosts.map((up, i) =>
            <div className="userPosts row" key={i}>
              
              <DeletePostBtn height="32" width="32" fill="white" />

              <Link to={{ pathname: "/user/"+ this.props.user.id + "/" + up.id }}>
                {up.title}
              </Link>
              <AddPostBtn className="arrowRight" height="32" width="32" fill="white" />
            </div>
          )
      )
    } else return (
      <p>No data :( </p>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    currentUserPosts: state.currentUserPosts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // setCurrentUser: (id) => dispatch(filterUsers(id)),
    // getUserPosts: (id) => dispatch(requestUserPosts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);