import React from 'react';

import './styles.css';

import Switch from '../../components/Switch';

function Home() {
  return (
    <div className="home">
      <div className="product-card">
        <div className="product-card__img" style={{ backgroundImage: 'url(https://i.imgur.com/ZwIhQDO.jpg)' }}>
          <div className="product-card__status product-card__status--promotion">Promoção</div>
        </div>

        <div className="product-card__info">
          <div className="product-card__price-favorite">
            <div className="product-card__price">198</div>
            <div className="product-card__favorite">
              <Switch checked />
              <span className="product-card__switch-text">tornar favorito</span>
            </div>
          </div>
          <div className="product-card__name-description">
            <div className="product-card__name">Fone Bluetooth XPTO</div>
            <div className="product-card__description">Aparelho intra auricular de som em alta definição sem fio para os viciados de plantão</div>
          </div>
        </div>
      </div>
      <div className="product-card">
        <div className="product-card__img" style={{ backgroundImage: 'url(https://i.imgur.com/jl3mWPw.jpg)' }}>
          <div className="product-card__status product-card__status--exclusive">Exclusivo</div>
        </div>

        <div className="product-card__info">
          <div className="product-card__price-favorite">
            <div className="product-card__price">19.9</div>
            <div className="product-card__favorite">
              <Switch />
              <span className="product-card__switch-text">tornar favorito</span>
            </div>
          </div>
          <div className="product-card__name-description">
            <div className="product-card__name">Guarda-Chuva XPTO</div>
            <div className="product-card__description">Abertura e fechamentos automáticos da copa, estrutura em fibra</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
