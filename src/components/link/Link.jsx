import React from "react";
import LinkImg from "../../assets/link.png";
import { CiDeliveryTruck } from "react-icons/ci";

const linksContent = [{ title: "Headphones", count: "25 Product" }];

const Link = ({ title, count }) => (
  <div>
    <img className="w-36" src={LinkImg} alt="" />
    <h6 className="text-center text-xl font-roboto font-medium text-primary mt-2">
      {title}
    </h6>
    <p className="text-center text-[#55585B] text-base">{count}</p>
  </div>
);

const DeliveryContent = ({ icon, title, description }) => (
  <div className="flex bg-[#F6F7F9] sm:py-8 p-3 sm:pl-10 ">
    {icon}
    <div>
      <h4 className="font-bold font-roboto text-base">{title}</h4>
      <p className="text-third-primary text-base">{description}</p>
    </div>
  </div>
);
// 
const deliveryContents = [
  {
    icon: <CiDeliveryTruck className="text-[#FD4B6B] text-4xl mr-4" />,
    title: "Free Delivery",
    description: "Orders from all items",
  }, 
   {
    icon: <CiDeliveryTruck className="text-[#FD4B6B] text-4xl mr-4" />,
    title: "Free Delivery",
    description: "Orders from all items",
  },
    {
    icon: <CiDeliveryTruck className="text-[#FD4B6B] text-4xl mr-4" />,
    title: "Free Delivery",
    description: "Orders from all items",
  }, 
   {
    icon: <CiDeliveryTruck className="text-[#FD4B6B] text-4xl mr-4" />,
    title: "Free Delivery",
    description: "Orders from all items",
  },
];

const LinksContainer = () => (
  <>
    <div className="max-w-container mx-auto sm:py-12 py-4 flex flex-wrap justify-center gap-10">
      {Array(4).fill() .map((_, index) => (
          <Link key={index} {...linksContent[0]} />
        ))}
    </div>

    <div className="max-w-container mx-auto grid sm:grid-cols-4 grid-cols-2 gap-1">
      {deliveryContents.map((content, index) => (
        <DeliveryContent key={index} {...content} />
      ))}
    </div>
  </>
);

export default LinksContainer;
