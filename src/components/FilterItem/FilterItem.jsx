import React from "react";

function FilterItem(props) {
  return (
    <div className="cursor-pointer text-black hover:bg-[#e6e6e694] hover:text-black rounded-lg p-2">
      {props.filterBy}
    </div>
  );
}

export default FilterItem;
