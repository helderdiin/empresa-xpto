import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './styles.css';
import { Creators as ProductActions } from '../../store/ducks/products';

function Switch({ id }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.find((_product) => _product.id === id) || {});

  const handlerSwitchChange = () => {
    dispatch(ProductActions.toggleFavorite(id));
  };

  return (
    <>
      <label htmlFor={id} className="switch__label">
        <input
          id={id}
          type="checkbox"
          checked={product.favorite}
          onChange={handlerSwitchChange}
          data-testid="switch-input"
        />
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
};

Switch.defaultProps = {
  id: Math.random(),
};

export default Switch;
