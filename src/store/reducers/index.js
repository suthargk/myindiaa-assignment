import { ADD_PRODUCT, ADD_PRODUCTS } from "../actions";

const INITIAL_STATE = {
  productList: [],
  cartProducts: [],
};

export const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return { ...state, productList: action.payload };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    }
    default:
      return state;
  }
};
