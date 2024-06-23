import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Productdetails from './../layout/Productdetails';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#0989FF",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        zIndex: "20",
        right: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaArrowRight className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white cursor-pointer" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#0989FF",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        zIndex: "20",
        left: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white cursor-pointer" />
    </div>
  );
}

function Newproducts() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://e-commerce-backend-phi-eight.vercel.app/api/v1/product/getallproduct`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="slider-container max-w-container mx-auto py-20">
      <Slider {...settings}>
        {products.map((product, index) => (
          // console.log(product)
          <Link to={`/products/${product._id}`} key={product.id} className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
            <div className="sm:h-[240px] overflow-hidden ">
              <img
                className="group-hover:scale-125 duration-500"
                src={product.variants[0].image}
                alt=""
              />
              {/* <Badge ></Badge> */}
            </div>
            <Productdetails product={product}></Productdetails>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Newproducts;
