import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestUsers } from './actions/users';

import UsersList from "./components/UsersList";
import './App.css';

// import store from 'store';


class App extends Component {

  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    return (
          <UsersList />
    );
  }
}

const mapStateToProps = (state) => {
  const { users } = state.users;
  return {
    users
  }
}

const mapDispatchToProps = {
  requestUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
