import {
  ADD_PRODUCT,
  ADD_PRODUCTS,
  DELETE_CART_PRODUCT,
  EDIT_QUANTITY,
} from "../actions";

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
      let hasProduct = state.cartProducts.find((product) => {
        return product.id === action.payload.id;
      });

      if (!state.cartProducts.length || !hasProduct) {
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            { ...action.payload, quantity: 1 },
          ],
        };
      }

      return {
        ...state,
        cartProducts: [
          ...state.cartProducts.map((product) =>
            product.id === hasProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        ],
      };
    }

    // [...state, {...action.payload, quantity: 1}] when cartProduct become empty
    // find if id in cartProduct product.id === action.payload.id => quantity += 1
    // else

    //
    // [...state, {...action.payload, quantity: 1}] when cartProduct become empty
    // cartProduct.map => product.id === action.payload.id => quantity += 1
    // else product

    case EDIT_QUANTITY: {
      const { id, quantity } = action.payload;

      const updatedCartProductsQuantity = state.cartProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity };
        } else {
          return product;
        }
      });

      return { ...state, cartProducts: updatedCartProductsQuantity };
    }

    case DELETE_CART_PRODUCT: {
      const filteredCartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );

      return { ...state, cartProducts: filteredCartProducts };
    }
    default:
      return state;
  }
};
