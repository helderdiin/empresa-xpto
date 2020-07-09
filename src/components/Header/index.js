import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useRouteMatch, useHistory } from 'react-router-dom';
import createPersistedState from 'use-persisted-state';
import { FormattedMessage, useIntl } from 'react-intl';

import './styles.css';

import Switch from '../Switch';
import { currency } from '../../services/format';
import { PAGE_NAMES } from '../../constants';

const useSearchHistory = createPersistedState('@empresa-xpto/search-history');

function Header({ page, product, onSearch }) {
  const [searchHistory, setSearchHistory] = useSearchHistory([]);
  const history = useHistory();
  const intl = useIntl();
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
            <Switch id={product.id} />
          </div>
        </div>
      );
    }

    return (
      <div className="header__title">
        <span>
          <FormattedMessage id="header.title" />
          {' '}
        </span>
        &nbsp;-
        {' '}
        <FormattedMessage id={`header.${page.toLowerCase()}.titleSuffix`} />
      </div>
    );
  };

  const getHeaderSubtitleElement = () => {
    if (product) {
      return product.decricaoCurta;
    }

    return intl.formatMessage({ id: `header.${page.toLowerCase()}.subtitle` });
  };

  const handlerKeyPressSearch = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      const element = e.target;
      onSearch(element.value);

      if (searchHistory.indexOf(element.value.toLowerCase()) === -1) {
        setSearchHistory([...searchHistory, element.value.toLowerCase()]);
      }

      element.blur();
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
          <input
            placeholder={intl.formatMessage({ id: 'header.searchPlaceholder' })}
            onKeyPress={handlerKeyPressSearch}
          />
          <span className="header__icon">
            <FaSearch />
            <div />
          </span>
          {searchHistory.length
            ? (
              <div className="header__search-history">
                <ul>
                  {searchHistory.map((h, i) => (
                    // eslint-disable-next-line
                    <li key={i}  onClick={() => { onSearch(h) }}><span>{h}</span></li>
                  ))}
                </ul>
              </div>
            )
            : ''}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.number,
    valor: PropTypes.number,
    nome: PropTypes.string,
    decricaoCurta: PropTypes.string,
    favorite: PropTypes.bool,
  }),
  onSearch: PropTypes.func,
};

Header.defaultProps = {
  page: PAGE_NAMES.ALL,
  product: null,
  onSearch: () => {},
};

export default Header;
