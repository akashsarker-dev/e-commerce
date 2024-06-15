// Newproducts.js

import React from "react";
import Slider from "react-slick";
import ProductImg from "../../assets/product.png";
import Productdetails from "../layout/Productdetails";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Badge } from './../layout/Badge';
// SampleNextArrow and SamplePrevArrow components unchanged...
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
    const products = [
        { id: 1, title: "Product 1", category: "Category 1", image: ProductImg },
        { id: 2, title: "Product 2", category: "Category 2", image: ProductImg },
        // Add more products as needed
    ];

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
                {products.map(product => (
                    <div key={product.id} className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
                        <div className="h-[240px] overflow-hidden ">
                            <img
                                className="group-hover:scale-125 duration-500"
                                src={product.image}
                                alt=""
                            />
                            <Badge ></Badge>
                        </div>
                        <Productdetails></Productdetails>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Newproducts;
