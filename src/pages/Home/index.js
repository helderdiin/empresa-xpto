import React, { useState, useEffect } from 'react';

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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
