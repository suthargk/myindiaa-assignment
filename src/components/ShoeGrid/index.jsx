import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-between">
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
      <ShoeCard />
    </div>
  );
};

export default ShoeGrid;
