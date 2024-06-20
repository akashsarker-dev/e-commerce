import React, { useState } from "react";
import Slider from "react-slick";
import BannerImg from "../../assets/banner.png";
import "slick-carousel/slick/slick.css";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 3000, 

    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          background: "rgba(255, 255, 255, 0.5)",
        }}>
        <ul
          style={{
            margin: "0px",
            display: "block",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "180px"
          }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          font: "16px",
          color: i === currentSlide ? "white" : "transparent",
          borderRight: i === currentSlide ? "2px solid white" : "",
        }}>
        {i + 1}
      </div>
    )
  };

  return (
    <div className="slider-container mx-auto py-10 md:py-0">
      <Slider {...settings}>
        <div>
          <img className=" w-full" src={BannerImg} alt="" />
        </div>
        <div>
          <img className=" w-full" src={BannerImg} alt="" />
        </div>
        <div>
          <img className=" w-full" src={BannerImg} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
