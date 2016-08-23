import React, { Component } from 'react';
import Menu from './Menu';

import './App.css';
import {Users} from './components/Users';


// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
          <h2>Start your day with Okta</h2>
          </div>
          <Menu />
          <div className="content">
          <Users />
          </div>
        </div>
    );
  }
}

export default App;
