import React, { Component } from 'react';

import NavLink from './NavLink';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <ul className="App-menu">
        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        </ul>
    );
  }
}

export default Menu;
