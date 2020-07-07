import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './pages/Products';
import Product from './pages/Product';
import PagesWrapper from './pages/pagesWrapper';

export default function Routes() {
  return (
    <Switch>
      <PagesWrapper>
        <Route path="/" exact component={Products} />
        <Route path="/exclusive" component={Products} />
        <Route path="/promotion" component={Products} />
        <Route path="/favorite" component={Products} />
        <Route path="/product/:productId" component={Product} />
      </PagesWrapper>
    </Switch>
  );
}
