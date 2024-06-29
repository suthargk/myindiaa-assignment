import { useState } from "react";
import { Trash } from "react-feather";
import { connect } from "react-redux";
import { DELETE_CART_PRODUCT, EDIT_QUANTITY } from "../../store/actions";
import { Link } from "react-router-dom";

const CartProduct = ({ product, dispatch }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleChangeQuantity = (e) => {
    const value = +e.target.value;
    setQuantity(value);

    dispatch({
      type: EDIT_QUANTITY,
      payload: {
        id: product.id,
        quantity: value,
      },
    });
  };

  const handleDeleteCartProduct = (id) => {
    dispatch({
      type: DELETE_CART_PRODUCT,
      payload: {
        id,
      },
    });
  };
  return (
    <Link to={`/${product.id}`} className="flex justify-between py-4">
      <div>
        <div className="flex gap-4">
          <div className="h-20 w-32 rounded-md overflow-hidden">
            <img className="w-full h-full" src={product.img} />
          </div>
          <div>
            <h3 className="text-zinc-800">{product.title}</h3>
            <h5 className="text-sm text-zinc-500">₹{product.price}</h5>
            <div className="mt-1">
              <select
                onChange={handleChangeQuantity}
                onClick={(e) => e.preventDefault()}
                className="p-0.5 focus:outline-none border border-zinc-200 rounded-md min-w-16"
                value={quantity}
              >
                {new Array(product.totalQuantity)
                  .fill(null)
                  .map((item, index) => (
                    <option value={index + 1} key={index}>
                      {index + 1}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <h3 className="font-medium text-lg">₹{product.price}</h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteCartProduct(product.id);
          }}
          className="flex gap-1 text-sm items-center text-zinc-500 self-end"
        >
          <Trash size={14} />
          <span>Delete</span>
        </button>
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(CartProduct);
