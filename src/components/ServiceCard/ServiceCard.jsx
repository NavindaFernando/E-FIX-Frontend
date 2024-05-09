import React from "react";
import cardOneImg from "../../assets/images/shipping_icon.png";
import cardTwoImg from "../../assets/images/customer_service_icon.png";
import cardThreeImg from "../../assets/images/money_back_icon.png";
import ServiceItem from "./ServiceItem";

function ServiceCard() {
  return (
    <div class="flex justify-center items-center gap-28 pt-12 px-6 flex-wrap max-xl:gap-3">
      <ServiceItem ServiceImg={cardOneImg} ServiceName="Free shipping worldwide" ServiceDescription="Lorem ipsum dolor sit amet"/>
      <ServiceItem ServiceImg={cardTwoImg} ServiceName="24/7 customer service" ServiceDescription="Lorem ipsum dolor sit amet"/>
      <ServiceItem ServiceImg={cardThreeImg} ServiceName="Money back guarantee" ServiceDescription="Lorem ipsum dolor sit amet"/>      
    </div>
  );
}

export default ServiceCard;
