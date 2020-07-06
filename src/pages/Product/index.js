import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import ProductImg from '../../components/ProductImg';

function Product() {
  const { productId } = useParams();
  const product = useSelector((state) => state.products.find(({ id }) => id === +productId));

  return (
    <div className="product">
      <div className="product__img-details">
        <div className="product__img">
          <ProductImg img={product.imagem} exclusive={product.exclusivo} promotion={product.promocao} />
        </div>
        <div className="product__details">
          <div className="product__title">
            {product.nome}
          </div>
          <p className="product__description">
            {product.descricaoLonga}
          </p>
        </div>
      </div>
      <div className="product__props">
        <div className="product__props-title">
          Ficha Técnica
        </div>
        <div className="product__props-items">
          <ul>
            {product.fichaTecnica.map((prop) => (
              <li>
                {prop.titulo}
                :&nbsp;
                {prop.descricao}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
