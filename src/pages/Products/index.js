import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';

function Products() {
  const location = useLocation();

  const products = useSelector((state) => {
    if (location.pathname === '/exclusive') {
      return state.products.filter((p) => p.exclusivo);
    }

    if (location.pathname === '/promotion') {
      return state.products.filter((p) => p.promocao);
    }

    if (location.pathname === '/favorite') {
      return state.products.filter((p) => p.favorito);
    }

    return state.products;
  });

  return (
    <>
      <Header />
      <div className="page-container products">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} style={{ position: 'relative' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;
