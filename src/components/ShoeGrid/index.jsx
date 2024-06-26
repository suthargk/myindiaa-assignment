import { connect } from "react-redux";
import ShoeCard from "../ShoeCard";

const ShoeGrid = ({ productList }) => {
  return (
    <div className="flex gap-8 flex-wrap justify-between">
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
