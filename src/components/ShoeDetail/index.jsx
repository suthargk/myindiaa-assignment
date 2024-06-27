import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_PRODUCT } from "../../store/actions";
import { useEffect, useState } from "react";

const ShoeSize = ({ handleShoeSize, shoeSize, size }) => {
  return (
    <div
      onClick={() => handleShoeSize(size)}
      className={`cursor-pointer min-w-fit hover:border-black duration-300 w-24 border border-zinc-200 px-6 py-2 rounded-md ${
        size === shoeSize ? "border-black" : ""
      }`}
    >
      {size}
    </div>
  );
};

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
    <div className="flex justify-center items-center">
      <div className="p-20 lg:w-4/5 mt-20 flex justify-between">
        <div className="lg:w-1/2 rounded-md overflow-hidden">
          <div>
            <img src={product?.img} />
          </div>
        </div>
        <div className="lg:w-1/2 ml-24 space-y-6">
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

          <div className="w-[310px]">
            <h3 className="flex justify-between">
              <span className={`${error ? "text-red-500" : ""}`}>
                Select Size
              </span>
              <span className="text-zinc-400">Size Guide</span>
            </h3>

            <div>
              <div
                className={`grid auto-rows-auto	grid-cols-3	 gap-2 mt-2 ${
                  error ? "border border-red-500 rounded-md" : ""
                }`}
              >
                {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map(
                  (size) => {
                    return (
                      <ShoeSize
                        handleShoeSize={handleShoeSize}
                        key={size}
                        shoeSize={shoeSize}
                        size={size}
                      />
                    );
                  }
                )}
              </div>
              {error ? (
                <p className="text-red-500 w-max text-sm">
                  Please select shoe size
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                if (!shoeSize.length) {
                  setError(true);
                } else {
                  setError(false);
                  handleAddBag();
                }
              }}
              className={`px-4 py-3 hover:bg-zinc-800 duration-300 bg-black text-white w-[300px] rounded-full ${
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
