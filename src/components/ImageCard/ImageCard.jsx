import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ImageCard(props) {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-3xl shadow-lg group w-72 h-96">
      <img
        src={props.cardImg}
        alt=""
        className="transition-transform group-hover:scale-110 duration-200 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-end bg-gradient-to-t to-transparent border cursor-pointer">
        <div className="pb-6 pl-8 text-white">
          <div className="text-center rounded-full w-fit px-5 py-2 bg-white text-black font-bold">
          {props.cardPrice}
          </div>
        </div>

        <div className="pb-6 pl-20 text-white">
          <div className="text-center rounded-full px-3 p-2 bg-white">
            <FontAwesomeIcon icon={faHeart} className="text-[#ff483b]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
