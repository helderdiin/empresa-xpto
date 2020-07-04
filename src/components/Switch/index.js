import React from 'react';

import './styles.css';

function Switch({ id = Math.random(), checked }) {
  return (
    <label htmlFor={id} className="switch__label">
      <input id={id} type="checkbox" checked={checked} />
      <span className="switch__slider" />
    </label>
  );
}

export default Switch;
