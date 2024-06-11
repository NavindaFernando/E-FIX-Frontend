import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import cardFourImg from "../../assets/images/card_four_img.jpg";

function CartItem() {
  return (
    <div className="w-full bg-[#F5F6F8] px-6 py-6 flex items-center gap-6">
      <div
        className="bg-cover bg-center object-contain h-[100px] w-[90px] p-10"
        style={{ backgroundImage: `url(${cardFourImg})` }}
      ></div>

      <div className="flex flex-col h-full justify-start">
        <p className="text-[#9B9B9B] pl-10 whitespace-nowrap max-sm:pl-0">
          Item name
        </p>
        <p className="text-[#BFBFBF] text-sm pl-10 whitespace-nowrap max-sm:pl-0 max-sm:text-xs">
          Free shipping
        </p>
        <p className="text-[#373737] pl-10 mt-2 whitespace-nowrap font-bold text-xl hidden max-md:block max-sm:pl-0">
          12$
        </p>
      </div>

      <p className="pl-10 text-[#373737] font-bold text-2xl m-auto max-md:hidden">
        12$
      </p>

      <div className="flex flex-row justify-end gap-5 mr-10 m-auto w-fit max-md:mr-0 max-sm:flex-col max-sm:gap-2">
        <div className="text-black border-[#a0a0a0] border w-[50px] h-[50px] duration-300 text-sm rounded-full flex justify-center items-center cursor-pointer hover:bg-[#E3A572] hover:border-[#E3A572] hover:text-white max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px] max-sm:text-xs">
          -
        </div>
        <div className="text-black text-sm rounded-full flex justify-center items-center max-sm:text-xs">
          2
        </div>
        <div className="text-white bg-[#E3A572] border-[#E3A572] border w-[50px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer max-md:w-[40px] max-md:h-[40px] max-sm:w-[30px] max-sm:h-[30px] max-sm:text-xs">
          +
        </div>
      </div>

      <div className="w-[18px] h-[18px] rounded-full cursor-pointer max-md:w-[15px] max-md:h-[15px] mb-24">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="text-[#BFBFBF] hover:text-[#3B3A39] duration-300"
        />
      </div>
    </div>
  );
}

export default CartItem;
