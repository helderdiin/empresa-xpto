import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import { PAGE_NAMES } from '../../constants';

function Products() {
  const [query, setQuery] = useState('');
  const location = useLocation();
  let currentPage = PAGE_NAMES.ALL;

  const compareByQuery = (content, q) => content.toLowerCase().indexOf(q.toLowerCase()) !== -1;

  const products = useSelector((state) => {
    let productsList = state.products;

    if (location.pathname === '/exclusive') {
      currentPage = PAGE_NAMES.EXCLUSIVE;
      productsList = state.products.filter((p) => p.exclusivo);
    }

    if (location.pathname === '/promotion') {
      currentPage = PAGE_NAMES.PROMOTION;
      productsList = state.products.filter((p) => p.promocao);
    }

    if (location.pathname === '/favorite') {
      currentPage = PAGE_NAMES.FAVORITE;
      productsList = state.products.filter((p) => p.favorite);
    }

    return productsList.filter((p) => compareByQuery(p.nome, query) || compareByQuery(p.descricaoLonga, query));
  });

  return (
    <>
      <Header page={currentPage} onSearch={setQuery} />
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
