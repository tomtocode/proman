import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';


import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route component={Home} />
      </Switch>
    </div>
  );
};