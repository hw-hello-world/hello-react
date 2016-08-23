import React, { Component } from 'react';
import Menu from './Menu';

import './App.css';
import {Users} from './components/Users';

import * as UserAPI from './api/User';


class AppHeader extends Component {

  constructor() {
    super();
    this.state = {user: null};
  }

  fetch(url) {

    var self = this;

    UserAPI.me()
      .done(function (user) {
        self.setState({user: user});
      })
      .fail(function (error) {
        console.error('cant read api: ', error);
      });
  }

  componentDidMount () {
    this.fetch();
  }

  render() {
    return (<div className="App-header">
            <h2>Start your day with Okta</h2>
            <p>{this.state.user && this.state.user.profile.login}</p>
            </div>
           );
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppHeader />
          <Menu />
          <div className="content">
          <Users />
          </div>
        </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
