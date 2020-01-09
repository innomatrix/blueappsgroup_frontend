import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class UsersList extends Component {
  
  render() {  
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the users</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (typeof this.props.users !== "undefined") {
      return (
        this.props.users.map((user, i) =>
          <div className="userDetails" key={i}>
            <div className="userName">{user.name} {user.surname}</div>
            <br />
            <div><a href={"mailto:" + user.email}>{user.email}</a></div>
            <div><a href={"tel:" + user.phone}>{user.phone}</a></div>
            <div><a href={"http://" + user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></div>
            <br />
            <div>{user.company.name}</div>
            <div>{user.company.catchPhrase}</div>
            <div><strong>{user.company.bs}</strong></div>
            <Link to={{ pathname: "/user/" + user.id }}>
              <button className="userDetailsBtn">Details</button>
            </Link>
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
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);