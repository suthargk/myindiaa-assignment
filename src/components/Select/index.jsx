import { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

const Select = ({ list, handleSort, selectedItem }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!toggle) return;

    const handler = () => setToggle(false);
    window.addEventListener("click", handler);

    return window.removeEventListener("click", () => {});
  }, [toggle]);

  return (
    <div>
      <div className="flex gap-4 items-center">
        <h6 className="text-zinc-500">Sort</h6>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setToggle(!toggle);
          }}
          className="relative py-2 px-4 bg-zinc-100 rounded-md flex justify-between items-center gap-2"
        >
          <span>{selectedItem.label}</span>
          <ChevronDown />

          {toggle ? (
            <div className="absolute top-12 z-10 text-right w-full rounded-md left-0 bg-white p-2 space-y-2">
              {list.map((item) => {
                return (
                  <div
                    key={item.value}
                    onClick={() => handleSort({ value: item.value })}
                    className={`duration-300 hover:opacity-50 ${
                      selectedItem.value === item.value ? "opacity-50" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Select;
