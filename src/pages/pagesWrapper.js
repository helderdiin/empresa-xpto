import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../services/api';
import { Creators as ProductActions } from '../store/ducks/products';

function PagesWrapper({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get('/5d3b57023000005500a2a0a6');
      dispatch(ProductActions.loadProducts(data.produtos));
    };

    getProducts();
  }, [dispatch]);

  return children;
}

export default PagesWrapper;
