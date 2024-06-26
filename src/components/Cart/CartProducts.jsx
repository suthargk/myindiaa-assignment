import CartProduct from "./CartProduct";

const CartProducts = ({ cartProducts }) => {
  return (
    <div className="rounded-md bg-white p-5 flex-1">
      <h3 className="text-xl font-medium">Cart</h3>

      <div className="divide-y space-y-4">
        {!cartProducts.length ? (
          <div className="text-zinc-700">There are no items in your bag</div>
        ) : (
          cartProducts.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default CartProducts;
