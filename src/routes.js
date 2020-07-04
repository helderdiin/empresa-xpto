import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Exclusive from './pages/Exclusive';
import Promotion from './pages/Promotion';
import Favorite from './pages/Favorite';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exclusive" component={Exclusive} />
        <Route path="/promotion" component={Promotion} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </BrowserRouter>
  );
}
