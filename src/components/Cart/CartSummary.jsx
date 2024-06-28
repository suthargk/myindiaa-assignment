import { getSubtotal, getTax } from "../../utils";

const CartSummary = ({ cartProducts }) => {
  const subtotal = (getSubtotal(cartProducts) || 0.0).toFixed(2);
  const discount = (subtotal * 0.2 || 0.0).toFixed(2);
  const tax = getTax(cartProducts);
  const total = (subtotal - (discount + tax)).toFixed(2) || 0.0;
  return (
    <div className="p-5 bg-white rounded-md divide-y divide-dashed w-full lg:w-[350px] space-y-4">
      <div>
        <h3 className="text-zinc-500 text-lg">Delivery</h3>
        <h5 className="text-zinc-400 text-sm">
          Delivery Date: {cartProducts.length ? "July 07, 2024" : ""}
        </h5>
      </div>

      <div className="pt-5">
        <div className="flex w-full">
          <input
            type="text"
            className="p-1 px-2 pr-20 border border-zinc-200 rounded-md w-full placeholder:text-zinc-400"
            placeholder="Promocode"
          />
          <button className="-ml-16 border-l border-zinc-200 px-2 text-zinc-600">
            Apply
          </button>
        </div>

        <p className="text-xs text-zinc-400 mt-1">20% off discount</p>
      </div>

      <div className="pt-5">
        <div className="flex justify-between text-lg text-zinc-500">
          <h3 className="">Subtotal</h3>
          <h3>₹{subtotal}</h3>
        </div>
        <div className="flex justify-between text-sm text-zinc-400">
          <h3 className="">Discount</h3>
          <h3>(20%) - ₹{discount}</h3>
        </div>
        <div className="flex justify-between text-sm text-zinc-400">
          <h3 className="">Delivery</h3>
          <h3>₹0.00</h3>
        </div>
        <div className="flex justify-between text-sm text-zinc-400">
          <h3 className="">Tax</h3>
          <h3>+ ₹{tax}</h3>
        </div>
      </div>

      <div className="pt-5 space-y-6">
        <div className="flex justify-between text-lg text-zinc-800 font-medium">
          <h3 className="">Total</h3>
          <h3>₹{total}</h3>
        </div>

        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 py-2 px-4 text-white rounded-md w-full">
            Proceed to checkout
          </button>
          <button className="border border-zinc-200 rounded-md py-2 px-4">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
