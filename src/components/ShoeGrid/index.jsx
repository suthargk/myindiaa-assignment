import { connect } from "react-redux";
import ShoeCard from "../ShoeCard";
import { useOutletContext } from "react-router-dom";
import Skeleton from "../Skeleton";

const ShoeGrid = ({ productList }) => {
  const { loading } = useOutletContext();

  if (loading) {
    return <Skeleton />;
  }
  return (
    <div className="grid auto-rows-auto	grid-cols-1	md:grid-cols-2	lg:grid-cols-3 gap-8 flex-wrap justify-between">
      {productList.map((product) => {
        return <ShoeCard key={product.id} product={product} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { productList: state.storeState.productList };
};

export default connect(mapStateToProps)(ShoeGrid);
