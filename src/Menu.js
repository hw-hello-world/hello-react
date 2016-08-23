import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <ul className="App-menu">
        <li><a href="#users" className="">Users</a></li>
        <li><a href="#about" className="">About</a></li>
        </ul>
    );
  }
}

export default Menu;
