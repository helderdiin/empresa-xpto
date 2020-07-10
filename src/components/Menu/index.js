import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import './styles.css';

import logoImg from '../../assets/logo.png';
import productsImg from '../../assets/products.png';
import exclusivesImg from '../../assets/exclusives.png';
import promotionImg from '../../assets/promotion.png';
import favoritesImg from '../../assets/favorites.png';
import finchLogoImg from '../../assets/finch-logo.png';

function Menu() {
  const intl = useIntl();

  return (
    <aside className="aside-menu">
      <div className="aside-menu__item" style={{ opacity: 1 }}>
        <NavLink to="/" activeClassName="active">
          <img src={logoImg} alt={intl.formatMessage({ id: 'menu.logo' })} />
          <span />
        </NavLink>
      </div>

      <div className="aside-menu__divider" />

      <NavLink to="/" exact activeClassName="active">
        <div className="aside-menu__item">
          <img src={productsImg} alt={intl.formatMessage({ id: 'menu.all' })} />
          <span><FormattedMessage id="menu.all" /></span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/exclusive" activeClassName="active">
        <div className="aside-menu__item">
          <img src={exclusivesImg} alt={intl.formatMessage({ id: 'menu.exclusive' })} />
          <span><FormattedMessage id="menu.exclusive" /></span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/promotion" activeClassName="active">
        <div className="aside-menu__item">
          <img src={promotionImg} alt={intl.formatMessage({ id: 'menu.promotion' })} />
          <span><FormattedMessage id="menu.promotion" /></span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/favorite" activeClassName="active">
        <div className="aside-menu__item">
          <img src={favoritesImg} alt={intl.formatMessage({ id: 'menu.favorite' })} />
          <span><FormattedMessage id="menu.favorite" /></span>
        </div>
      </NavLink>

      <div className="aside-menu__finch-logo">
        <a href="http://www.finchsolucoes.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={finchLogoImg} alt={intl.formatMessage({ id: 'menu.finchLogo' })} />
        </a>
      </div>
    </aside>
  );
}

export default Menu;
