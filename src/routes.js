import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import {Portfolio} from './components/Portfolio';
import {Contact} from './components/Contact';
import { Services } from './components/Services';

import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact-us" component={Contact} />


      </Switch>
    </div>
  );
};