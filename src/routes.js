import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import {Portfolio} from './components/Portfolio';
import {Contact} from './components/Contact';
import { Services } from './components/Services';
import { NotFound } from './components/NotFound';


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
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/contact-us" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};