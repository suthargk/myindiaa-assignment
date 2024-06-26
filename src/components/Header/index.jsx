import { Link } from "react-router-dom";
import { ShoppingBag } from "react-feather";

const Header = () => {
  return (
    <header className="z-10 bg-white flex h-16 border-b border-zinc-300 items-center px-4 justify-between fixed w-full top-0 left-0">
      <Link to="" className="font-semibold text-2xl text-zinc-800">
        MyIndiaa
      </Link>
      <nav className="flex gap-12">
        <a href="" className="uppercase">
          Sale
        </a>
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

      <Link to="/cart">
        <ShoppingBag />
      </Link>
    </header>
  );
};

export default Header;
