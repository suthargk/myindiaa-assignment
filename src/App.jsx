import { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_PRODUCTS } from "./store/actions";

function App({ dispatch }) {
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: data,
        });
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(App);
