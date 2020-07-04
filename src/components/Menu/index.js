import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.png';
import productsImg from '../../assets/products.png';
import exclusivesImg from '../../assets/exclusives.png';
import promotionImg from '../../assets/promotion.png';
import favoritesImg from '../../assets/favorites.png';
import finchLogoImg from '../../assets/finch-logo.png';

function Home() {
  return (
    <aside className="aside-menu">
      <div className="aside-menu__item" style={{ opacity: 1 }}>
        <img src={logoImg} alt="Logo" />
        <span />
      </div>

      <div className="aside-menu__divider" />

      <div className="aside-menu__item">
        <img src={productsImg} alt="Produtos" />
        <span>Todos</span>
      </div>

      <div className="aside-menu__divider" />

      <div className="aside-menu__item">
        <img src={exclusivesImg} alt="Exclusivos" />
        <span>Exclusivos</span>
      </div>

      <div className="aside-menu__divider" />

      <div className="aside-menu__item">
        <img src={promotionImg} alt="Promoção" />
        <span>Promoção</span>
      </div>

      <div className="aside-menu__divider" />

      <div className="aside-menu__item">
        <img src={favoritesImg} alt="Favoritos" />
        <span>Favoritos</span>
      </div>

      <div className="aside-menu__finch-logo">
        <a href="http://www.finchsolucoes.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={finchLogoImg} alt="Finch Logo" />
        </a>
      </div>
    </aside>
  );
}

export default Home;
