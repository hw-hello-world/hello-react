import React, { Component } from 'react';
import R from 'ramda';

import * as UserAPI from '../api/User';
import Pagination from './Pagination';
import Loading from './Loading';

import './Users.css';

class UserRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.user.profile.fullName}</td>
        <td>{this.props.user.profile.login}</td>
        <td>{this.props.user.profile.email}</td>
        <td>{this.props.user.status}</td>
      </tr>
    );
  }
}

class UsersList extends Component {
  render() {
    return (
      <div>
        <table>
        <thead>
        <tr><th>Name</th><th>Email</th><th>Login</th><th>Status</th></tr>
        </thead>
        <tbody>
        {this.props.users.xs.map(function (user) { return <UserRow user={user} key={user.id} />; })}
        </tbody>
        </table>
        <Pagination {...this.props} />
      </div>
    );
  }
}

class Users extends Component {

  constructor() {
    super();
    this.state = {users: null};
    this.fetch = this.fetch.bind(this);
  }

  fetch(url) {

    var self = this;

    return UserAPI.users(url)
      .done(function (users) {
        var exists = self.state['users'];

        if (exists) {
          users.xs = R.concat(exists.xs, users.xs);
        }
        self.setState({users: users});

      })
      .fail(function (error) {
        console.error('cant read api: ', error);
      });
  }

  componentDidMount () {
    this.fetch();
  }

  render() {

    return (
        <div>
        <h1>Users Page</h1>
        { this.state.users ? <UsersList users={this.state.users} showMore={this.fetch} /> : <Loading /> }
        </div>
    );
  }
}

export {Users}
