import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.png';
import productsImg from '../../assets/products.png';
import exclusivesImg from '../../assets/exclusives.png';
import promotionImg from '../../assets/promotion.png';
import favoritesImg from '../../assets/favorites.png';
import finchLogoImg from '../../assets/finch-logo.png';

function Menu() {
  return (
    <aside className="aside-menu">
      <div className="aside-menu__item" style={{ opacity: 1 }}>
        <NavLink to="/" activeClassName="active">
          <img src={logoImg} alt="Logo" />
          <span />
        </NavLink>
      </div>

      <div className="aside-menu__divider" />

      <NavLink to="/" exact activeClassName="active">
        <div className="aside-menu__item">
          <img src={productsImg} alt="Produtos" />
          <span>Todos</span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/exclusive" activeClassName="active">
        <div className="aside-menu__item">
          <img src={exclusivesImg} alt="Exclusivos" />
          <span>Exclusivos</span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/promotion" activeClassName="active">
        <div className="aside-menu__item">
          <img src={promotionImg} alt="Promoção" />
          <span>Promoção</span>
        </div>
      </NavLink>

      <div className="aside-menu__divider" />

      <NavLink to="/favorite" activeClassName="active">
        <div className="aside-menu__item">
          <img src={favoritesImg} alt="Favoritos" />
          <span>Favoritos</span>
        </div>
      </NavLink>

      <div className="aside-menu__finch-logo">
        <a href="http://www.finchsolucoes.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={finchLogoImg} alt="Finch Logo" />
        </a>
      </div>
    </aside>
  );
}

export default Menu;
