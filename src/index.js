import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import AppRoutes from './components/AppRoutes';

import './index.css';

ReactDOM.render(<Router routes={AppRoutes} history={browserHistory} />, document.getElementById('root'));
