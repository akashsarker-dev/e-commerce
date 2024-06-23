import React from "react";
import LinkImg from "../../assets/link.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";

const LinkContents = [
  {
    icon: LinkImg,
    title: "headphones",
    link: "/products",
  },
  {
    icon: LinkImg,
    title: "speakers",
    link: "/products",
  },
  {
    icon: LinkImg,
    title: "microphones",
    link: "/products",
  },
  {
    icon: LinkImg,
    title: "accessories",
    link: "/products",
  },
];

const DeliveryContents = [
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

const DeliveryContent = ({ icon, title, description }) => (
  <div className="flex bg-[#F6F7F9] sm:py-8 p-3 sm:pl-10">
    {icon}
    <div>
      <h4 className="font-bold font-roboto text-base">{title}</h4>
      <p className="text-third-primary text-base">{description}</p>
    </div>
  </div>
);



const LinksContainer = () => (
  <>
    <div className="max-w-container mx-auto sm:py-12 py-4 flex flex-wrap justify-center gap-10">
      {LinkContents.map((content, index) => (
       <Link to={content.link} key={index}>
        <img className=" w-24 sm:w-56 " src={content.icon} alt="" srcset="" />
        <h4 className="font-bold font-roboto text-base text-center">{content.title}</h4>
        <p className="text-third-primary text-base text-center">Shop Now</p>
       </Link>
      ))}
    </div>

    <div className="max-w-container mx-auto grid sm:grid-cols-4 grid-cols-2 gap-1">
      {DeliveryContents.map((content, index) => (
        <DeliveryContent key={index} {...content} />
      ))}
    </div>
  </>
);

export default LinksContainer;
