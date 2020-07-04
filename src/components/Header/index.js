import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header__description">
        <div className="header__title">
          <span>Empresa XPTO </span>
          - Conheça todos os nossos produtos
        </div>
        <div className="header__subtitle">Listagem de produtos - clique no produto desejado para saber mais</div>
      </div>
      <div className="header__search">
        <input placeholder="Buscar" />
        <span className="header__icon">
          <FaSearch />
          <div />
        </span>
      </div>
    </header>
  );
}

export default Header;
