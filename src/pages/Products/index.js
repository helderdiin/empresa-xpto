import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { PAGE_NAMES } from '../../constants';

function Products() {
  const location = useLocation();
  let currentPage = PAGE_NAMES.ALL;

  const products = useSelector((state) => {
    if (location.pathname === '/exclusive') {
      currentPage = PAGE_NAMES.EXCLUSIVE;
      return state.products.filter((p) => p.exclusivo);
    }

    if (location.pathname === '/promotion') {
      currentPage = PAGE_NAMES.PROMOTION;
      return state.products.filter((p) => p.promocao);
    }

    if (location.pathname === '/favorite') {
      currentPage = PAGE_NAMES.FAVORITE;
      return state.products.filter((p) => p.favorito);
    }

    return state.products;
  });

  return (
    <>
      <Header page={currentPage} />
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
