import React from 'react';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';

function ProductCard({ product }) {
  const getProductStatusElement = (exclusive, promotion) => {
    if (exclusive) {
      return <div className="product-card__status product-card__status--exclusive">Exclusivo</div>;
    }

    if (promotion) {
      return <div className="product-card__status product-card__status--promotion">Promoção</div>;
    }

    return '';
  };

  return (
    <div className="product-card">
      <div className="product-card__img" style={{ backgroundImage: `url(${product.imagem})` }}>
        {getProductStatusElement(product.exclusivo, product.promocao)}
      </div>

      <div className="product-card__info">
        <div className="product-card__price-favorite">
          <div className="product-card__price">{currency(product.valor)}</div>
          <div className="product-card__favorite">
            <Switch checked />
            <span className="product-card__switch-text">tornar favorito</span>
          </div>
        </div>
        <div className="product-card__name-description">
          <div className="product-card__name">{product.nome}</div>
          <div className="product-card__description">{product.decricaoCurta}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
