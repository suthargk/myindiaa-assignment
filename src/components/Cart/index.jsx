import { useEffect } from "react";
import { connect } from "react-redux";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";

const Cart = ({ cartProducts }) => {
  useEffect(() => {
    document.body.classList.add("bg-zinc-100");

    return () => document.body.classList.remove("bg-zinc-100");
  }, []);

  return (
    <div className="flex gap-4 mt-20 justify-center p-10">
      <CartProducts cartProducts={cartProducts} />
      <CartSummary cartProducts={cartProducts}/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.storeState.cartProducts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
