import React, { Component } from 'react';

import Pagination from './Pagination';

import * as API from '../api/Users';

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

  fetch() {
    var self = this;
    API.users()
      .done(function (users) {
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
        <tbody>{this.state.users && this.state.users.xs.map(function (user, i) { return <UserRow user={user} key={i} />; })} </tbody>
        </table>
        <Pagination links={this.state.users && this.state.users.links} />
        </div>
    );
  }
}

export {Users}
