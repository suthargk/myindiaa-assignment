import { Link } from "react-router-dom";

const BADGE_COLOR = {
  "Just Released!": "bg-indigo-600",
  "Sale!": "bg-rose-600",
};

const ShoeCard = ({ product }) => {
  return (
    <Link
      to={product.id}
      className="relative min-w-80 flex-1 rounded-md overflow-hidden"
    >
      <div
        className={`${BADGE_COLOR[product.status]} absolute top-4 -right-1 px-2 py-2 rounded`}
      >
        <h3 className="text-white text-sm font-medium">{product.status}</h3>
      </div>
      <div className="">
        <img src={product.img} />
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
