import React from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';

function Header({ product }) {
  const match = useRouteMatch({
    path: '/product/:productId',
  });

  const getHeaderTitleElement = () => {
    if (product) {
      return (
        <div className="header__title">
          <span>
            {product.nome}
          </span>
          <div className="header__title-price">
            {currency(product.valor)}
          </div>
          <div className="header__title-favorite">
            <Switch />
            <span className="header__switch-text">tornar favorito</span>
          </div>
        </div>
      );
    }

    return (
      <div className="header__title">
        <span>Empresa XPTO </span>
        &nbsp;- Conheça todos os nossos produtos
      </div>
    );
  };

  const getHeaderSubtitleElement = () => {
    if (product) {
      return <span>{product.decricaoCurta}</span>;
    }

    return <span>Listagem de produtos - clique no produto desejado para saber mais</span>;
  };

  return (
    <header className="header">
      <div className="header__description">
        {getHeaderTitleElement()}
        <div className="header__subtitle">
          {getHeaderSubtitleElement()}
        </div>
      </div>
      <div className="header__search">
        {match
          ? (
            <div className="header__back-button">
              <FaArrowLeft />
            </div>
          )
          : ''}
        <div className="header__input">
          <input placeholder="Buscar" />
          <span className="header__icon">
            <FaSearch />
            <div />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
