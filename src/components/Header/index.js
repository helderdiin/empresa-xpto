import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';
import { PAGE_NAMES } from '../../constants';

function Header({ page, product }) {
  const history = useHistory();
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

    if (page === PAGE_NAMES.ALL) {
      return (
        <div className="header__title">
          <span>Empresa XPTO </span>
          &nbsp;- Conheça todos os nossos produtos
        </div>
      );
    }

    if (page === PAGE_NAMES.EXCLUSIVE) {
      return (
        <div className="header__title">
          <span>Empresa XPTO </span>
          &nbsp;- Conheça nossos produtos exclusivos
        </div>
      );
    }

    if (page === PAGE_NAMES.PROMOTION) {
      return (
        <div className="header__title">
          <span>Empresa XPTO </span>
          &nbsp;- Conheça nossas promoções
        </div>
      );
    }

    if (page === PAGE_NAMES.FAVORITE) {
      return (
        <div className="header__title">
          <span>Empresa XPTO </span>
          &nbsp;- Meus Favoritos
        </div>
      );
    }
  };

  const getHeaderSubtitleElement = () => {
    if (product) {
      return <span>{product.decricaoCurta}</span>;
    }

    if (page === PAGE_NAMES.ALL) {
      return <span>Listagem de produtos - clique no produto desejado para saber mais</span>;
    }

    if (page === PAGE_NAMES.EXCLUSIVE) {
      return <span>Listagem de produtos exclusivos - clique no produto desejado para saber mais</span>;
    }

    if (page === PAGE_NAMES.PROMOTION) {
      return <span>Listagem de produtos em promoção - clique no produto desejado para saber mais</span>;
    }

    if (page === PAGE_NAMES.FAVORITE) {
      return <span>Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais</span>;
    }
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
            // eslint-disable-next-line
            <div onClick={() => history.goBack()} role="button" className="header__back-button">
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

Header.propTypes = {
  page: PropTypes.string,
  product: PropTypes.shape({
    valor: PropTypes.number,
    nome: PropTypes.string,
    decricaoCurta: PropTypes.string,
  }),
};

Header.defaultProps = {
  page: PAGE_NAMES.ALL,
  product: null,
};

export default Header;
