import React from 'react';
import {
  render,
  fireEvent,
} from '../../setupTests';
import Switch from './index';

test('Renderizar switch como favorito', async () => {
  const { getByTestId } = render(<Switch id={2} />);

  const inputElement = getByTestId('switch-input');

  expect(inputElement).not.toBe(undefined);
  expect(inputElement.checked).toBe(true);
});

test('Deixar o switch marcado como favorito', async () => {
  const { getByTestId } = render(<Switch id={1} />);

  const inputElement = getByTestId('switch-input');

  expect(inputElement).not.toBe(undefined);
  expect(inputElement.checked).toBe(false);

  fireEvent.click(inputElement);

  expect(inputElement.checked).toBe(true);
});
