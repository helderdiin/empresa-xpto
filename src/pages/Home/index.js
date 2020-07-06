import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.css';

import ProductCard from '../../components/ProductCard';

function Home() {
  const products = useSelector((state) => state.products);

  return (
    <div className="home">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} style={{ position: 'relative' }}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
