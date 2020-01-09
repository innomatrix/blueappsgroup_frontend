import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPostcomments extends Component {
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the comments</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    if (this.props.currentUserPostComments.length) {
      return (
        this.props.currentUserPostComments.map((cupc, i) =>
          <div className="userPostsComments fullwidth" key={i}>
            <strong>{cupc.name}</strong>

            <span><a href={"mailto:" + cupc.email}>{cupc.email}</a></span>
            <br />
            <br />
            <div className="row">
              {cupc.body}
            </div>
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
    currentUserPostComments: state.currentUserPostComments,
    currentUserPostCommentshasErrored: state.userPostCommentsHasErrored,
    currentUserPostCommentsisLoading: state.userPostCommentsIsLoading
  };
};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(UserPostcomments);