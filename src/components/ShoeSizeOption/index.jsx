const ShoeSize = ({ handleShoeSize, shoeSize, size }) => {

  return (
    <div
      onClick={() => handleShoeSize(size)}
      className={`cursor-pointer min-w-fit hover:border-black duration-300 w-full md:w-24 border  px-6 py-2 rounded-md ${
        size === shoeSize ? "border-black" : "border-zinc-200"
      }`}
    >
      {size}
    </div>
  );
};

const ShoeSizeOption = ({ error, handleShoeSize, shoeSize, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="flex justify-between">
        <span className={`${error ? "text-red-500" : ""}`}>Select Size</span>
        <span className="text-zinc-400">Size Guide</span>
      </h3>

      <div>
        <div
          className={`grid auto-rows-auto grid-cols-3 gap-2 mt-2 ${
            error ? "border border-red-500 rounded-md" : ""
          }`}
        >
          {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map((size) => {
            return (
              <ShoeSize
                handleShoeSize={handleShoeSize}
                key={size}
                shoeSize={shoeSize}
                size={size}
              />
            );
          })}
        </div>
        {error ? (
          <p className="text-red-500 w-max text-sm">Please select shoe size</p>
        ) : null}
      </div>
    </div>
  );
};

export default ShoeSizeOption;
