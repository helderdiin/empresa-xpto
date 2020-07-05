import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import ProductCard from '../../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/5d3b57023000005500a2a0a6');
      setProducts(data.produtos);
    };

    getProducts();
  }, []);

  return (
    <div className="home">
      {products.map((product) => (
        <Link to={`/product/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
