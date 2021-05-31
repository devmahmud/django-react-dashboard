import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
