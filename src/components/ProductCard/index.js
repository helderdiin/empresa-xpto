import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';
import ProductImg from '../ProductImg';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <ProductImg img={product.imagem} exclusive={product.exclusivo} promotion={product.promocao} />
      </div>

      <div className="product-card__info">
        <div className="product-card__price-favorite">
          <div className="product-card__price">{currency(product.valor)}</div>
          <div className="product-card__favorite">
            <Switch id={product.id} checked={product.favorite} />
            <span className="product-card__switch-text">tornar favorito</span>
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

export default ProductCard;
