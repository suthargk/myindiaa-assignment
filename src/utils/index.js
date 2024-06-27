export const getSubtotal = (cartProducts) => {
  return cartProducts.reduce((acc, item) => {
    acc = acc + item.price * item.quantity;
    return acc;
  }, 0);
};

export const getTax = (cartProducts) => {
  if (cartProducts.length) {
    return cartProducts.reduce((acc, product) => {
      acc = acc + 112 * product.quantity;
      return acc;
    }, 0);
  }

  return 0.0;
};
