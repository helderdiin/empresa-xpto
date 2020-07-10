import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  Aside, Item, Divider, FinchLogo,
} from './styles';

import logoImg from '../../assets/logo.png';
import productsImg from '../../assets/products.png';
import exclusivesImg from '../../assets/exclusives.png';
import promotionImg from '../../assets/promotion.png';
import favoritesImg from '../../assets/favorites.png';
import finchLogoImg from '../../assets/finch-logo.png';

function Menu() {
  const intl = useIntl();

  return (
    <Aside>
      <Item opaticy={1}>
        <NavLink to="/" activeClassName="active">
          <img src={logoImg} alt={intl.formatMessage({ id: 'menu.logo' })} />
          <span />
        </NavLink>
      </Item>

      <Divider />

      <NavLink to="/" exact activeClassName="active">
        <Item>
          <img src={productsImg} alt={intl.formatMessage({ id: 'menu.all' })} />
          <span><FormattedMessage id="menu.all" /></span>
        </Item>
      </NavLink>

      <Divider />

      <NavLink to="/exclusive" activeClassName="active">
        <Item>
          <img src={exclusivesImg} alt={intl.formatMessage({ id: 'menu.exclusive' })} />
          <span><FormattedMessage id="menu.exclusive" /></span>
        </Item>
      </NavLink>

      <Divider />

      <NavLink to="/promotion" activeClassName="active">
        <Item>
          <img src={promotionImg} alt={intl.formatMessage({ id: 'menu.promotion' })} />
          <span><FormattedMessage id="menu.promotion" /></span>
        </Item>
      </NavLink>

      <Divider />

      <NavLink to="/favorite" activeClassName="active">
        <Item>
          <img src={favoritesImg} alt={intl.formatMessage({ id: 'menu.favorite' })} />
          <span><FormattedMessage id="menu.favorite" /></span>
        </Item>
      </NavLink>

      <FinchLogo>
        <a href="http://www.finchsolucoes.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={finchLogoImg} alt={intl.formatMessage({ id: 'menu.finchLogo' })} />
        </a>
      </FinchLogo>
    </Aside>
  );
}

export default Menu;
