import React, { Component } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductImg from "../../assets/product.png";
import { Badge } from "../layout/Badge";
import Productdetails from "../layout/Productdetails";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "#0989FF", height: "50px", width: "50px", borderRadius: "50%", position: "absolute", top: "50%", zIndex: "20", right: "10px", cursor: " pointer"
            }} onClick={onClick} >
            <FaArrowRight className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white cursor-pointer" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block", background: "#0989FF", height: "50px", width: "50px", borderRadius: "50%", position: "absolute", top: "50%", zIndex: "20", left: "10px", cursor: " pointer"
            }} onClick={onClick} >
            <FaArrowLeft className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white cursor-pointer" />
        </div>
    );
}

function Newproducts() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container max-w-container mx-auto py-20">
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
                        <img className="group-hover:scale-125 duration-500"src={ProductImg}
                            alt=""  />
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

export default Newproducts;
