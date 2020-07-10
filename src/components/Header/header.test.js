import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import {
  render,
} from '../../setupTests';
import Header from './index';
import { PAGE_NAMES } from '../../constants';
import messages from '../../i18n/messages/pt-br';

const history = createMemoryHistory();

test('Renderizar header na tela de Todos', async () => {
  const { getByText } = render(
    <Router history={history}>
      <Header />
    </Router>,
  );

  getByText(messages['header.all.subtitle']);
});

test('Renderizar header na tela de Exclusivos', async () => {
  const { getByText } = render(
    <Router history={history}>
      <Header page={PAGE_NAMES.EXCLUSIVE} />
    </Router>,
  );

  getByText(messages['header.exclusive.subtitle']);
});

test('Renderizar header na tela de Promoção', async () => {
  const { getByText } = render(
    <Router history={history}>
      <Header page={PAGE_NAMES.PROMOTION} />
    </Router>,
  );

  getByText(messages['header.promotion.subtitle']);
});

test('Renderizar header na tela de Favoritos', async () => {
  const { getByText } = render(
    <Router history={history}>
      <Header page={PAGE_NAMES.FAVORITE} />
    </Router>,
  );

  getByText(messages['header.favorite.subtitle']);
});
