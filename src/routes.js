import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Exclusive from './pages/Exclusive';
import Promotion from './pages/Promotion';
import Favorite from './pages/Favorite';
import Product from './pages/Product';

import Menu from './components/Menu';
import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />

      <div id="app">
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exclusive" component={Exclusive} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/product/:productId" component={Product} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
