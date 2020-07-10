import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import './styles.css';

function ProductImg({ img, exclusive, promotion }) {
  const getProductStatusElement = () => {
    if (exclusive) {
      return (
        <div className="product-img__status product-img__status--exclusive">
          <FormattedMessage id="productImg.exclusive.status" />
        </div>
      );
    }

    if (promotion) {
      return (
        <div className="product-img__status product-img__status--promotion">
          <FormattedMessage id="productImg.promotion.status" />
        </div>
      );
    }

    return '';
  };

  return (
    <div className="product-img" style={{ backgroundImage: `url(${img})` }}>
      {getProductStatusElement()}
    </div>
  );
}

ProductImg.propTypes = {
  img: PropTypes.string.isRequired,
  exclusive: PropTypes.bool,
  promotion: PropTypes.bool,
};

ProductImg.defaultProps = {
  exclusive: false,
  promotion: false,
};

export default ProductImg;
