import { useState } from "react";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";

const SORT_LIST = [
  {
    label: "Newest Releases",
    value: "newest_releases",
  },
  {
    label: "Price: High-Low",
    value: "high-low",
  },
  {
    label: "Price: Low-High",
    value: "low-high",
  },
];

const ShoeIndex = () => {
  const [sortList] = useState(SORT_LIST);
  const [selectedSort, setSelectedSort] = useState(sortList[0]);

  const handleSort = ({ value }) => {
    const selectedItem = sortList.find((sortItem) => sortItem.value === value);
    setSelectedSort(selectedItem);
  };

  return (
    <div className="flex flex-row-reverse p-10">
      <div className="flex-1">
        <div className="flex justify-between my-8 items-center">
          <h3 className="text-2xl">Running</h3>
          <Select
            list={sortList}
            handleSort={handleSort}
            selectedItem={selectedSort}
          />
        </div>
        <ShoeGrid />
      </div>
      <div className="basis-64">
        <ShoeSidebar />
      </div>
    </div>
  );
};

export default ShoeIndex;
