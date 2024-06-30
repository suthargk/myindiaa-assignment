import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_PRODUCTS } from "./store/actions";
import Footer from "./components/Footer";

function App({ dispatch }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Outlet context={{ loading }} />
      <Footer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(App);
