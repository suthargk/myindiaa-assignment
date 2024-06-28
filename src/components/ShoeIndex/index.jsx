import { useState } from "react";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";
import { ADD_PRODUCTS } from "../../store/actions";
import { connect } from "react-redux";

const SORT_LIST = [
  {
    label: "Newest Releases",
    value: "newest_releases",
  },
  {
    label: "Price: High-Low",
    value: "desc",
  },
  {
    label: "Price: Low-High",
    value: "asc",
  },
];

const ShoeIndex = ({ dispatch }) => {
  const [sortList] = useState(SORT_LIST);
  const [selectedSort, setSelectedSort] = useState(sortList[0]);

  const handleSort = ({ value }) => {
    const selectedItem = sortList.find((sortItem) => sortItem.value === value);
    setSelectedSort(selectedItem);

    fetch(`/products`, {
      method: "POST",
      body: JSON.stringify({ sort: selectedItem.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: data,
        });
      });
  };

  return (
    <div className="flex flex-row-reverse p-10">
      <div className="flex-1">
        <div className="flex justify-between mb-8 items-center">
          <h3 className="text-2xl">Running</h3>
          <Select
            list={sortList}
            handleSort={handleSort}
            selectedItem={selectedSort}
          />
        </div>
        <ShoeGrid />
      </div>
      {/* <div className="basis-64">
        <ShoeSidebar />
      </div> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(ShoeIndex);
