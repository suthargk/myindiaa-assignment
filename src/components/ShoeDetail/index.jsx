import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_PRODUCT } from "../../store/actions";

const ShoeSize = ({ size }) => {
  return (
    <div className="cursor-pointer min-w-fit hover:bg-zinc-100 duration-300 w-24 border border-zinc-200 px-6 py-2 rounded-md">
      {size}
    </div>
  );
};

const ShoeDetail = ({ productList, dispatch }) => {
  const { productId } = useParams();

  const product = productList.find((item) => item.id === productId);

  const handleAddBag = () => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-20 lg:w-4/5 mt-20 flex justify-between">
        <div className="lg:w-1/2 rounded-md overflow-hidden">
          <div>
            <img src={product.img} />
          </div>
        </div>
        <div className="lg:w-1/2 ml-24 space-y-6">
          <div>
            <h3 className="text-orange-600 font-medium">
              Sustainable Materials
            </h3>
            <h1 className="text-xl">{product.title}</h1>
            <h2 className="">Men's Road Running Shoes</h2>
          </div>

          <div>
            <h3>MRP: ₹{product.price}</h3>
            <p className="text-zinc-400">Incl. of taxes</p>
            <p className="text-zinc-400">
              (Also includes all applicable duties)
            </p>
          </div>

          <div className="w-[300px]">
            <h3 className="flex justify-between">
              <span className="">Select Size</span>
              <span className="text-zinc-400">Size Guide</span>
            </h3>

            <div className="grid auto-rows-auto	grid-cols-3	 gap-2 mt-2">
              <ShoeSize size="UK 6" />
              {/* <ShoeSize size="UK 6.5" /> */}
              <ShoeSize size="UK 7" />
              {/* <ShoeSize size="UK 7.5" /> */}
              <ShoeSize size="UK 8" />
              <ShoeSize size="UK 9" />
              <ShoeSize size="UK 10" />
              <ShoeSize size="UK 11" />
            </div>
          </div>

          <div>
            <button
              onClick={() => handleAddBag()}
              className="px-4 py-3 hover:bg-zinc-800 duration-300 bg-black text-white w-[300px] rounded-full"
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
  return { productList: state.storeState.productList };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
