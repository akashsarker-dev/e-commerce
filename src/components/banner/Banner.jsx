import React from "react";
import Slider from "react-slick";
import BannerImg from "../../assets/banner.png"
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px",
         display:"block",
         position:'absolute',
         top:"50%",
         transform:"translateY(-50%)",
         left:"180px"
       }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight:"2px solid red"
        }}>
        {i + 1}
      </div>
    )
  };
  return (
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        <div>
          <img className=" w-full" src={BannerImg} alt=""  />
        </div>
        <div>
          <img className=" w-full" src={BannerImg} alt=""  />
        </div>
        <div>
          <img className=" w-full" src={BannerImg} alt=""  />
        </div>
        
      </Slider>
    </div>
  );
}
export default Banner;
