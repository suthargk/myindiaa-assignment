import { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_PRODUCTS } from "./store/actions";
import Footer from "./components/Footer";

function App({ dispatch }) {
  useEffect(() => {
    fetch("/products", {
      method: "POST",
      body: JSON.stringify({ sort: "newest_releases" }),
    })
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
      <Footer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(App);
