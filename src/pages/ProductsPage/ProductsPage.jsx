import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageCard from "../../components/ImageCard/ImageCard";
import cardOneImg from "../../assets/images/card_one_img.jpg";
import cardTwoImg from "../../assets/images/card_two_img.jpg";
import cardFourImg from "../../assets/images/card_four_img.jpg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import FilterItem from "../../components/FilterItem/FilterItem";

function ProductsPage() {
  return (
    <>
      <Navbar />

      <div className="mt-28 px-14 pb-7 flex gap-8 justify-center items-center flex-wrap max-sm:flex-col max-sm:gap-2 max-md:mt-24">
        <FilterItem filterBy="Cosmetics" />
        <FilterItem filterBy="Bags" />
        <FilterItem filterBy="Watch" />
        <FilterItem filterBy="Cloths" />
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
        <Button btnName="View more" btnRounded="rounded-md" />
      </div>

      <Footer />
    </>
  );
}

export default ProductsPage;
