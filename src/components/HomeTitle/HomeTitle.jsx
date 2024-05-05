import React from "react";
import Button from "../Button/Button";

function HomeTitle(props) {
  return (
    <div className="flex items-center justify-between px-28 py-10 max-md:px-16 max-sm:px-10 max-sm:justify-center">
      <h3 className="text-3xl text-[#292929] font-bold">{props.homeTitle}</h3>
      <Button btnName="View more" btnRounded="rounded-full" btnHidden="max-sm:hidden"/>
    </div>
  );
}

export default HomeTitle;
