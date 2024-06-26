import { ADD_PRODUCTS } from "../actions";

const INITIAL_STATE = {
  productList: [],
};

export const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return { ...state, productList: action.payload };
    }
    default:
      return state;
  }
};
