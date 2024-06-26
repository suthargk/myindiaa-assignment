import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";

const ShoeIndex = () => {
  return (
    <div className="flex flex-row-reverse p-10">
      <div className="flex-1">
        <ShoeGrid />
      </div>
      <div className="basis-64">
        <ShoeSidebar />
      </div>
    </div>
  );
};

export default ShoeIndex;
