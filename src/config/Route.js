import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import App from '../container/app';



const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

export default RouteConfig;
