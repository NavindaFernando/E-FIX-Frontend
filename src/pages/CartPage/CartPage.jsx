import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CartItem from "../../components/CartItem/CartItem";
import payment_icons from "../../assets/images/payment_icons.png";
import ImageCard from "../../components/ImageCard/ImageCard";
import cardOneImg from "../../assets/images/card_one_img.jpg";
import cardTwoImg from "../../assets/images/card_two_img.jpg";
import cardFourImg from "../../assets/images/card_four_img.jpg";
import Footer from "../../components/Footer/Footer";

function CartPage() {
  return (
    <>
      <Navbar />

      <div className="mt-32 px-12 flex gap-5 w-full max-md:flex-wrap max-md:mt-24">
        <div className="flex-col w-1/2 p-8 bg-[#F5F6F8] max-md:w-full">
          <h1 className="text-[1.5rem] font-bold mb-2 text-[#373737]">
            Pay with
          </h1>
          <p className="text-[#BFBFBF]">
            Get full refund if the item is not as described or if is not
            delivered
          </p>
          <div className="mt-2 flex w-full gap-2">
            <img src={payment_icons} className="w-[300px]" />
          </div>
        </div>

        <div className="flex w-1/2 p-8 bg-[#F5F6F8] max-md:w-full max-sm:flex-col">
          <div className="w-1/2 h-full flex justify-center items-center max-sm:justify-start max-sm:items-start max-sm:h-fit">
            <h1 className="text-[2.5rem] font-bold mb-2 text-[#373737] max-sm:text-[1.5rem]">
              $35.52
            </h1>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center gap-2 ml-4 max-sm:justify-start max-sm:ml-0 max-sm:w-full">
            <p className="text-[#9B9B9B]">Already saved $12.86</p>
            <p className="text-[#BFBFBF] text-sm">Free shipping</p>
            <button className="mt-1.5 py-2 text-center bg-[#E3A572] hover:bg-[#ca8349] duration-300 text-[#FFFFFF] rounded-full w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="px-12 flex w-full py-6 text-2xl text-[#373737] font-bold">
        All items
      </div>

      <div className="px-12 flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="px-12 flex w-full pt-6 text-2xl text-[#373737] font-bold">
        You may also like
      </div>
      <div className="px-12 flex w-full py-3 text-[#9B9B9B]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>

      <div className="my-6 flex justify-center items-center gap-9 flex-wrap px-10">
        <ImageCard cardImg={cardTwoImg} cardPrice="$499.00" />
        <ImageCard cardImg={cardFourImg} cardPrice="$389.00" />
        <ImageCard cardImg={cardOneImg} cardPrice="$428.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$319.00" />
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
