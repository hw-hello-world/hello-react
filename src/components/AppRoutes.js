import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import {Users, User} from './Users';
import About from './About';

module.exports = (
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users" component={Users}/>
    <Route path="/user/:id" component={User}/>
    <Route path="/about" component={About}/>
    </Route>
);
