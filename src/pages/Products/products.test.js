import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import {
  render,
  fireEvent,
} from '../../setupTests';
import Products from './index';

const history = createMemoryHistory();

test('Renderizar 2 produtos na tela Todos', async () => {
  const { container } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const productCard = container.querySelectorAll('.product-card');

  expect(productCard.length).toBe(2);
});

test('Renderizar 1 produto na tela Exclusivos', async () => {
  history.push('/exclusive');
  const { container } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const productCard = container.querySelectorAll('.product-card');

  expect(productCard.length).toBe(1);
});

test('Renderizar 1 produto na tela Promoção', async () => {
  history.push('/promotion');
  const { container } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const productCard = container.querySelectorAll('.product-card');

  expect(productCard.length).toBe(1);
});

test('Renderizar 1 produto na tela Favoritos', async () => {
  history.push('/favorite');
  const { container } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const productCard = container.querySelectorAll('.product-card');

  expect(productCard.length).toBe(1);
});

test('Deve ser possível clicar em 1 produto', async () => {
  const { container } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const [productCard] = container.querySelectorAll('.product-card');

  expect(productCard).toBeDefined();

  fireEvent.click(productCard);
});

test('Renderizar 1 produto na tela ao buscar por "Fone"', async () => {
  const { container, getByTestId } = render(
    <Router history={history}>
      <Products />
    </Router>,
  );

  const searchInput = getByTestId('search-input');

  searchInput.focus();

  fireEvent.keyPress(searchInput, { target: { value: 'Fone' } });

  expect(searchInput.value).toBe('Fone');

  fireEvent.blur(searchInput);

  const productCard = container.querySelectorAll('.product-card');

  expect(productCard.length).toBe(1);
});
