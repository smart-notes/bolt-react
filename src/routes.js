import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Temp from './components/TempComp';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/temp" component={Temp} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;