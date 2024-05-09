import React from "react";

function Slider(props) {
  return (
    <div className="flex justify-center items-center">
      <img src={props.sliderImage} alt="" className="w-full bg-cover h-dvh object-cover" />
      <div className="absolute text-center">
        <h3 className="text-9xl text-[#291A12] font-bold max-md:text-8xl max-sm:text-6xl">
          {props.sliderTitle}
        </h3>
        <p className="text-[#291A12] max-md:px-16 max-sm:text-sm">
          {props.sliderPara}
        </p>
      </div>
    </div>
  );
}

export default Slider;
