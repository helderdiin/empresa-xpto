import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './styles.css';
import { Creators as ProductActions } from '../../store/ducks/products';

function Switch({ id, checked }) {
  const dispatch = useDispatch();

  const handlerSwitchChange = () => {
    dispatch(ProductActions.toggleFavorite(id));
  };

  return (
    <>
      <label htmlFor={id} className="switch__label">
        <input id={id} type="checkbox" checked={checked} onChange={handlerSwitchChange} />
        <span className="switch__slider" />
      </label>
      <span className="switch__text">
        <FormattedMessage id="switch.text" />
      </span>
    </>
  );
}

Switch.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
};

Switch.defaultProps = {
  id: Math.random(),
  checked: false,
};

export default Switch;
