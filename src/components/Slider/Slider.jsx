import React from "react";

function Slider(props) {
  return (
    <div className="flex justify-center items-center">
      <img src={props.sliderImage} alt="" className="w-full bg-cover" />
      <div className="absolute text-center">
        <h3 className="text-9xl text-[#291A12] font-bold pb-1 max-md:text-6xl max-sm:text-3xl max-sm:pb-0">
          {props.sliderTitle}
        </h3>
        <p className="text-[#291A12] max-md:text-sm max-sm:text-xs max-sm:px-16">
          {props.sliderPara}
        </p>
      </div>
    </div>
  );
}

export default Slider;
