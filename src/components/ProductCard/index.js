import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';
import ProductImg from '../ProductImg';

function ProductCard({ product }) {
  const history = useHistory();
  const moveToProduct = (e) => {
    if (e.target.parentElement.classList[0] !== 'switch__label') {
      history.push(`/product/${product.id}`);
    }
  };

  return (
    // eslint-disable-next-line
    <div className="product-card" onClick={moveToProduct}>
      <div className="product-card__img">
        <ProductImg img={product.imagem} exclusive={product.exclusivo} promotion={product.promocao} />
      </div>

      <div className="product-card__info">
        <div className="product-card__price-favorite">
          <div className="product-card__price">{currency(product.valor)}</div>
          <div className="product-card__favorite">
            <Switch id={product.id} />
          </div>
        </div>
        <div className="product-card__name-description">
          <div className="product-card__name">{product.nome}</div>
          <p className="product-card__description">{product.decricaoCurta}</p>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    imagem: PropTypes.string,
    exclusivo: PropTypes.bool,
    promocao: PropTypes.bool,
    valor: PropTypes.number,
    nome: PropTypes.string,
    decricaoCurta: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
};

export default memo(ProductCard);
