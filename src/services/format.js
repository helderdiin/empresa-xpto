export const currency = (num = 0) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);

export default {
  currency,
};
