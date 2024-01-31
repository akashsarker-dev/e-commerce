import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SearchNav = () => {
  const [show , setShow] = useState(false)

  const handleCart =()=>{
    setShow(true)
  }
  return (

    <div className=" border-2 border-[#00000021]">
      <div className="grid grid-cols-12 gap-4 items-center max-w-container mx-auto py-4">
        <div className="col-span-3">
          <h1 className="text-4xl font-extrabold text-primary">
            ShopCraftify
          </h1>
        </div>
        <div className="col-span-6 ">

          <div className=" relative bg-white border-4 border-second-primary py-3 px-5 w-[600px] rounded-lg mx-auto">
            <input className=" text-lg focus:outline-none w-[90%] "
              type="search"
              placeholder="Search Products" />
            <div className=" py-4 px-5 absolute top-0 right-0 w-15 h-full bg-second-primary" type="button">
              <IoSearch className="text-white text-2xl" ></IoSearch>
            </div>
          </div>

        </div>
        <div className="col-span-3  flex justify-end items-center gap-6">
          <div className="w-11 h-11 rounded-full border-2 border-[rgba(1,15,28,0.1)] p-3.5">
            <FaUser onClick={handleCart} />
            {
              show &&
              <div className=" w-40 h-10 bg-red-400">

              </div>
            }
          </div>
            <FaShoppingCart className=" text-2xl text-primary"></FaShoppingCart>
        </div>
      </div>
    </div>

  );
};

export default SearchNav;
