import React, { Component } from 'react';

// import axios from 'axios';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { filterUsers } from './../actions/users';
import { requestUserPosts } from './../actions/posts';
// import { useHistory } from 'react-router-dom';

import { ReactComponent as AddPostBtn } from './../assets/add_button.svg';
import { ReactComponent as GoBackBtn } from './../assets/arrow_back.svg';

import UserPosts from "./UserPosts";

class UserDetails extends Component {

  componentDidMount() {
    var id = this.props.match.params.slug;
    this.props.setCurrentUser(id);
    this.props.getUserPosts(id);    
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    if (this.props.user !== null)
      return (
        <div className="fullWidth">
            <div className="userHeader column">
              <div className="userName row">
                <Link to={{ pathname: "/users/" + this.props.user.id}} className="goBackArrowBtn">
                  <GoBackBtn height="32" width="32" fill="white" /><span>Back</span>
                </Link>              
                
                {this.props.user.name}
              <AddPostBtn height="32" width="32" fill="white" className="addPostBtn" />
              </div>
            </div> 
            <div className="column  fullWidth">
              <UserPosts />
            </div>
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
    currentUserPosts: state.currentUserPosts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (id) => dispatch(filterUsers(id)),
    getUserPosts: (id) => dispatch(requestUserPosts(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);