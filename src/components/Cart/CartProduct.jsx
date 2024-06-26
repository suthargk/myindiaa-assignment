import React from "react";
import { Trash } from "react-feather";

const CartProduct = ({ product }) => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex gap-4">
        <div className="h-20 w-32 rounded-md overflow-hidden">
          <img className="w-full h-full" src={product.img} />
        </div>
        <div>
          <h3 className="text-zinc-800">{product.title}</h3>
          <h5 className="text-sm text-zinc-500">₹{product.price}</h5>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="font-medium text-lg">₹{product.price}</h3>
        <button className="flex gap-1 text-sm items-center text-zinc-500">
          <Trash size={14} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
