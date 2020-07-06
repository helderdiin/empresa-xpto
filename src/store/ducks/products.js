export const Types = {
  LOAD: 'products/LOAD',
};

const INITIAL_STATE = [];

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return action.payload.productsList;
    default:
      return state;
  }
}

export const Creators = {
  loadProducts: (productsList) => ({
    type: Types.LOAD,
    payload: {
      productsList,
    },
  }),
};
