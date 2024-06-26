``
import Cart from "../Cart";

const Header = () => {
  return (
    <header className="z-10 flex h-16 border-b border-zinc-300 items-center px-4 justify-between fixed w-full top-0 left-0">
      <h1 className="font-semibold text-2xl text-zinc-800">MyIndiaa</h1>
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

      <Cart />
    </header>
  );
};

export default Header;
