import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X } from "react-feather";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-56 bg-white flex flex-col gap-4 items-center justify-center">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="z-50 absolute top-2 right-2 text-zinc-600"
          >
            <X />
          </div>
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
        </div>
      )}
    </div>
  );
};

export default Menu;
