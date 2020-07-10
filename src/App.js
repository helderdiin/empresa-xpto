import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import './global.css';

import Routes from './routes';
import store from './store';
import messages from './i18n';

import Menu from './components/Menu';

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="pt-BR" messages={messages['pt-BR']}>
        <BrowserRouter>
          <Menu />

          <div id="app">
            <main>
              <Routes />
            </main>
          </div>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
}

export default App;
