import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//import {users, me} from './api/Users';

ReactDOM.render(<App />, document.getElementById('root'));

/*
users()
  .done(function (users) {
    console.log(users);
    ReactDOM.render(<App users={users} />, document.getElementById('root')
    );
  })
  .fail(function (error) {
    console.error('cant read api: ', error);
  });

me();
*/
