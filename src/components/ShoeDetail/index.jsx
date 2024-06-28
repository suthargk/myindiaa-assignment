import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_PRODUCT } from "../../store/actions";
import { useEffect, useState } from "react";
import ShoeSizeOption from "../ShoeSizeOption";

const ShoeDetail = ({ cartProducts, productList, dispatch }) => {
  const { productId } = useParams();
  const product = productList.find((item) => item.id === productId);
  const [shoeSize, setShoeSize] = useState("");
  const [error, setError] = useState(false);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  useEffect(() => {
    const hasProduct = cartProducts.find((product) => product.id === productId);
    console.log("hasProduct", hasProduct);
    if (hasProduct?.totalQuantity <= hasProduct?.quantity) {
      setIsOutOfStock(true);
    } else {
      setIsOutOfStock(false);
    }
  }, [cartProducts]);

  const handleShoeSize = (size) => {
    setShoeSize(size);
  };

  const handleAddBag = () => {
    if (isOutOfStock) return;
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  return (
    <div className="flex lg:justify-center">
      <div className="p-8 flex flex-col-reverse	space-y-4 justify-center md:flex-row lg:p-20 mt-10 md:mt-20 md:justify-between">
        <ShoeSizeOption
          error={error}
          handleShoeSize={handleShoeSize}
          shoeSize={shoeSize}
          className="w-full md:hidden my-6"
        />

        <div className="lg:w-[600px] rounded-md overflow-hidden">
          <img src={product?.img} />
        </div>
        <div className="md:ml-10 lg:ml-24 space-y-6">
          <div>
            <h3 className="text-orange-600 font-medium flex gap-4">
              <span>Sustainable Materials</span>
              {isOutOfStock ? (
                <span className="bg-red-500 text-xs p-1 rounded-full text-white">
                  Out of Stock
                </span>
              ) : null}
            </h3>
            <h1 className="text-xl">{product?.title}</h1>
            <h2 className="">Men's Road Running Shoes</h2>
          </div>

          <div>
            <h3>MRP: ₹{product?.price}</h3>
            <p className="text-zinc-400">Incl. of taxes</p>
            <p className="text-zinc-400">
              (Also includes all applicable duties)
            </p>
          </div>

          <ShoeSizeOption
            error={error}
            handleShoeSize={handleShoeSize}
            shoeSize={shoeSize}
            className="hidden md:block w-[310px]"
          />

          <div className="fixed bottom-0 left-0 w-full md:relative">
            <button
              onClick={() => {
                if (!shoeSize.length) {
                  setError(true);
                } else {
                  setError(false);
                  handleAddBag();
                }
              }}
              className={`w-full px-4 py-3 hover:bg-zinc-800 duration-300 bg-black text-white md:w-[300px] md:rounded-full ${
                isOutOfStock ? "opacity-30 hover:bg-black" : ""
              }`}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const mapStateToProps = (state) => {
  return {
    productList: state.storeState.productList,
    cartProducts: state.storeState.cartProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
