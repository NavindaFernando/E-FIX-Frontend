import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ImageCard from "../components/ImageCard/ImageCard";
import cardOneImg from "../assets/images/card_one_img.jpg";
import cardTwoImg from "../assets/images/card_two_img.jpg";
import cardFourImg from "../assets/images/card_four_img.jpg";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

function ProductsPage() {
  return (
    <>
      <Navbar />

      <div className="mt-28 px-14 pb-7 flex gap-8 justify-center items-center flex-wrap max-sm:flex-col max-sm:gap-2 max-md:mt-24">
        <div className="cursor-pointer text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2">Cosmetics</div>
        <div className="cursor-pointer text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2">Bags</div>
        <div className="cursor-pointer text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2">Watch</div>
        <div className="cursor-pointer text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2">Cloths</div>
      </div>

      <div className="flex justify-center items-center gap-9 flex-wrap px-10">
        <ImageCard cardImg={cardTwoImg} cardPrice="$499.00" />
        <ImageCard cardImg={cardFourImg} cardPrice="$389.00" />
        <ImageCard cardImg={cardOneImg} cardPrice="$428.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$319.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$499.00" />
        <ImageCard cardImg={cardFourImg} cardPrice="$389.00" />
        <ImageCard cardImg={cardOneImg} cardPrice="$428.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$319.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$499.00" />
        <ImageCard cardImg={cardFourImg} cardPrice="$389.00" />
        <ImageCard cardImg={cardOneImg} cardPrice="$428.00" />
        <ImageCard cardImg={cardTwoImg} cardPrice="$319.00" />
      </div>

      <div className="flex justify-center items-center py-10">
        <Button
          btnName="View more"
          btnRounded="rounded-md"
        />
      </div>

      <Footer/>
    </>
  );
}

export default ProductsPage;
