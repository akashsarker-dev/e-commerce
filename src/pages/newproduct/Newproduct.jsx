import React from "react";
import Slider from "react-slick";
import { Badge } from "../../components/layout/Badge";
import ProductImg from "../../assets/product.png";
import Productdetails from "../../components/layout/Productdetails";

function Newproduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="max-w-container mx-auto">
      <Slider {...settings}>
        <div className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
          <div className="h-[240px] overflow-hidden relative">
            <img
              className="group-hover:scale-125 duration-500"
              src={ProductImg}
              alt=""
            />
            <Badge></Badge>
          </div>
          <Productdetails></Productdetails>
        </div>
        <div className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
          <div className="h-[240px] overflow-hidden relative">
            <img
              className="group-hover:scale-125 duration-500"
              src={ProductImg}
              alt=""
            />
            <Badge></Badge>
          </div>
          <Productdetails></Productdetails>
        </div>
        <div className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
          <div className="h-[240px] overflow-hidden relative">
            <img
              className="group-hover:scale-125 duration-500"
              src={ProductImg}
              alt=""
            />
            <Badge></Badge>
          </div>
          <Productdetails></Productdetails>
        </div>
      </Slider>
    </div>
  );
}

export default Newproduct;


