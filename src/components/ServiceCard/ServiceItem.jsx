import React from "react";

function ServiceItem(props) {
  return (
    <div class={`${props.serviceBg} rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}>
      <div class="flex items-center">
        <img
          src={props.ServiceImg}
          alt="Avatar of Jonathan Reinink"
          className="w-10 h-10 mr-4"
        />
        <div class="text-sm">
          <p class="text-black leading-none">{props.ServiceName}</p>
          <p class="text-gray-600">{props.ServiceDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
