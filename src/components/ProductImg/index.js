import React from 'react';

import './styles.css';

function ProductImg({ img, exclusive, promotion }) {
  const getProductStatusElement = () => {
    if (exclusive) {
      return <div className="product-img__status product-img__status--exclusive">Exclusivo</div>;
    }

    if (promotion) {
      return <div className="product-img__status product-img__status--promotion">Promoção</div>;
    }

    return '';
  };

  return (
    <div className="product-img" style={{ backgroundImage: `url(${img})` }}>
      {getProductStatusElement()}
    </div>
  );
}

export default ProductImg;
