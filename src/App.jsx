import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShoeIndex from "./components/ShoeIndex";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
        setProducts(data);
      });
  }, []);
  // console.log("products[0]?.img", products);
  return (
    <>
      <Header />

      <main className="mt-16">
        <ShoeIndex />
      </main>
    </>
  );
}

export default App;
