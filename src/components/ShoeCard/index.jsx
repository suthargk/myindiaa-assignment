import { Link } from "react-router-dom";

const BADGE_COLOR = {
  0: { color: "unset", status: "" },
  1: { color: "bg-rose-600", status: "Sale!" },
  2: { color: "bg-indigo-600", status: "Just Released!" },
};

const ShoeCard = ({ product }) => {
  return (
    <Link
      to={product.id}
      className="relative min-w-80 flex-1"
    >
      <div
        className={`${
          BADGE_COLOR[product.status].color
        } absolute top-4 -right-1 px-2 py-2 rounded`}
      >
        <h3 className="text-white text-sm font-medium">
          {BADGE_COLOR[product.status].status}
        </h3>
      </div>
      <div className="lg:h-[300px] bg-zinc-200 rounded-md overflow-hidden">
        <img className="h-full w-full" src={product.img} />
      </div>
      <div className="flex justify-between mt-4">
        <div className="">
          <h2 className="">{product.title}</h2>
          <div className="text-zinc-700 font-light">
            {product.number_of_colors} Colors
          </div>
        </div>
        <h3>₹{product.price}</h3>
      </div>
    </Link>
  );
};

export default ShoeCard;
