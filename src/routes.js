import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Exclusive from './pages/Exclusive';
import Promotion from './pages/Promotion';
import Favorite from './pages/Favorite';
import Product from './pages/Product';
import PagesWrapper from './pages/pagesWrapper';

export default function Routes() {
  return (
    <Switch>
      <PagesWrapper>
        <Route path="/" exact component={Home} />
        <Route path="/exclusive" component={Exclusive} />
        <Route path="/promotion" component={Promotion} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/product/:productId" component={Product} />
      </PagesWrapper>
    </Switch>
  );
}
