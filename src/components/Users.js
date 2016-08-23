import React, { Component } from 'react';
import R from 'ramda';

import * as UserAPI from '../api/User';
import Pagination from './Pagination';

import './Users.css';

class UserRow extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.user.profile.fullName}</td>
        <td>{this.props.user.profile.login}</td>
        <td>{this.props.user.profile.email}</td>
      </tr>
    );
  }
}


class Users extends Component {

  constructor() {
    super();
    this.state = {users: null};
  }

  fetch(url) {

    var self = this;

    UserAPI.users(url)
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
        <table>
          <thead>
          <tr><th>Name</th><th>Email</th><th>Login</th></tr>
          </thead>
        <tbody>
          {this.state.users && this.state.users.xs.map(function (user, i) { return <UserRow user={user} key={i} />; })}
        </tbody>
        </table>
        <Pagination links={this.state.users && this.state.users.links} pageClick={this.fetch.bind(this)} />
        </div>
    );
  }
}

export {Users}
