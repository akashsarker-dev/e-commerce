import React from "react";
import ProductImg from "../../assets/product.png";
import { IoIosHeart } from "react-icons/io";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Newproduct = () => {
  return (
    <div className="container mx-auto py-28">
      <h3 className="mb-12">New Arrivals</h3>
       <div>
       <div className="w-[370px] ">
            <div className=" group relative ">
          <img src={ProductImg} alt="" />
            <div className=" absolute bottom-0 left-0 flex flex-col  float-right justify-center h-[156px] w-full group-hover:bg-[#00000061] opacity-0 group-hover:opacity-100 duration-300 ">
             <div className=" flex gap-3 items-center justify-end ">
             <p>Add to Wish List</p>
              <IoIosHeart />
             </div>
              <div className=" flex gap-3 items-center justify-end ">
              <p>Compare</p>
              <HiOutlineRefresh />
              </div>
             <div className=" flex gap-3 items-center justify-end ">
             <p>Add to Cart</p>
              <FaShoppingCart />
             </div>
        </div>
            </div>
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold">Basic Crew Neck Tee</h4>
              <p className="text-gray-600">$44.00</p>
            </div>
            <p className="text-gray-600">Black</p>
      
      </div>
       </div>
    </div>
  );
};

export default Newproduct;
