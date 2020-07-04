import React from 'react';

import './global.css';

import Routes from './routes';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
