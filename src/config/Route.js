import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import App from '../container/app';
import Common from '../container/Common';
import Login from '../component/sign/Login';
import Register from '../component/sign/Register';
import Home from '../component/home';
import Test from '../component/test';



const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="" component={App}>
      <Route IndexRoute path="/login" component={Login}/>
      <Route IndexRoute path="/register" component={Register}/>
    </Route>
    <Route path="" component={Common}>
      <Route IndexRoute path="/" component={Home}/>
    </Route>
  </Router>
);

export default RouteConfig;
