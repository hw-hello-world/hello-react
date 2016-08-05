import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
import App from './App';
import './index.css';


var domain = 'http://rain.okta1.com:1802',
    api = `${domain}/api`,
    userId = '00ukvl4TvXUzjNKk60g3',
    users = `${api}/v1/users/${userId}`;

jquery
  .ajax({ url: users,
          type: 'GET',
          contentType: "application/json",
          crossDomain: true,
          xhrFields: {
            withCredentials: true
          }
        })
  .done(function (resp) {
    console.log('============== get user:', resp);
    ReactDOM.render(
        <App />,
      document.getElementById('root')
    );
  });


//var token = '00CY5DahpcK7EMVPjBmc9yDJsGsdGyIIo34uiX-Cgl';
//dataType: "application/json",
//beforeSend: function(xhr, settings) {
//  xhr.setRequestHeader('Authorization','SSWS ' + token);
//  xhr.setRequestHeader('x-okta-sdk','');
//  xhr.setRequestHeader('x-okta-xsrftoken','');
//},
