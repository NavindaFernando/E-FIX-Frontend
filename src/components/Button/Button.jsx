import React from "react";

function Button(props) {
  return (
    <button className={`${props.btnRounded} ${props.btnHidden} border border-solid border-[#5e5e5e] w-[150px] h-[45px]`}>
      {props.btnName}
    </button>
  );
}

export default Button;

