import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './global.css';

import Routes from './routes';
import store from './store';

import Menu from './components/Menu';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />

        <div id="app">
          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
