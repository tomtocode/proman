import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { NotFound } from './components/NotFound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Navigation /> */}
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/proman" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


