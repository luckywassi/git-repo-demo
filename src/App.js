import React, { useState } from 'react';
import './style.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import myFunctions from './myFunctions';
import Layout from './Layout';
import Login from './Login';

function Authenticate({ location }) {
  const [status] = myFunctions.getCookie('myUser');
  return status ? (
    <Layout />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location.pathname } }} />
  );
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route component={Authenticate} />
      </Switch>
    </div>
  );
}
