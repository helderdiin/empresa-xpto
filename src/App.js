import React from 'react';

import './global.css';

import Routes from './routes';
import Menu from './components/Menu';
import Header from './components/Header';

function App() {
  return (
    <>
      <Menu />
      <div id="app">
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    </>
  );
}

export default App;
