import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './styles.css';
import { Creators as ProductActions } from '../../store/ducks/products';

function Switch ({ id, checked }) {
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
      <span className="switch__text">tornar favorito</span>
    </>
  );
}

Switch.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool,
};

Switch.defaultProps = {
  checked: false,
};

export default Switch;
