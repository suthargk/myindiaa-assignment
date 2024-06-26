import { Link } from "react-router-dom";

const ShoeCard = ({ product }) => {
  return (
    <Link
      to={``}
      className="relative min-w-80 flex-1 rounded-md overflow-hidden"
    >
      <div className="bg-indigo-600 absolute top-4 -right-1 px-2 py-2 rounded">
        <h3 className="text-white text-sm font-medium">Just Released!</h3>
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
        <h3>$160</h3>
      </div>
    </Link>
  );
};

export default ShoeCard;
