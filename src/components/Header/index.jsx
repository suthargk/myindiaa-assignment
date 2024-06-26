import { Link } from "react-router-dom";
import { ShoppingBag } from "react-feather";

import { connect } from "react-redux";
import { useMemo } from "react";
import Menu from "../Menu";

const Header = ({ cartProducts }) => {
  const totalCartProducts = useMemo(() => {
    return cartProducts.reduce((acc, product) => {
      acc = acc + product.quantity;
      return acc;
    }, 0);
  }, [cartProducts]);

  return (
    <header className="z-10 bg-white flex h-16 border-b border-zinc-300 items-center px-4 justify-between fixed w-full top-0 left-0">
      <Link to="" className="font-semibold text-2xl text-zinc-800">
        MyIndiaa
      </Link>
      <nav className="hidden md:flex sm:gap-8 lg:gap-12">
        <Link to="" className="uppercase">
          Sale
        </Link>
        <a href="" className="uppercase">
          New Releases
        </a>
        <a href="" className="uppercase">
          Men
        </a>
        <a href="" className="uppercase">
          Women
        </a>
        <a href="" className="uppercase">
          Kids
        </a>
        <a href="" className="uppercase">
          Collections
        </a>
      </nav>

      <div className="flex gap-4">
        <Link to="/cart" className="relative">
          <ShoppingBag />
          {totalCartProducts > 0 ? (
            <div className="absolute -top-1 -right-1 h-5 w-5 text-[10px] flex justify-center items-center text-white rounded-full bg-red-500">
              {totalCartProducts > 9 ? "9+" : totalCartProducts}
            </div>
          ) : null}
        </Link>

        <div className="flex md:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.storeState.cartProducts,
  };
};

export default connect(mapStateToProps)(Header);
