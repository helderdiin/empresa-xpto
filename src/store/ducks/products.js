export const Types = {
  LOAD: 'products/LOAD',
  TOGGLE_FAVORITE: 'products/TOGGLE_FAVORITE',
};

const INITIAL_STATE = [];

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return action.payload.productsList.map((product) => ({ ...product, favorite: false }));
    case Types.TOGGLE_FAVORITE:
      return state.map(
        (product) => (product.id === action.payload.id
          ? { ...product, favorite: !product.favorite }
          : product),
      );
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
  toggleFavorite: (id) => ({
    type: Types.TOGGLE_FAVORITE,
    payload: {
      id,
    },
  }),
};
