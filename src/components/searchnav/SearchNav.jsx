import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from './../utils/Loader';

const SearchNav = () => {
  const [show , setShow] = useState(false)

  const handleCart =()=>{
    setShow(true)
  }

  // const mobileNavRef = useRef(null);


  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };
  
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileNavRef]);

  const closeMobileMenu = () => {
    setShow(false);
  };
  return (

    <div className=" border-2 border-[#00000021]">
      <div className="grid grid-cols-12 gap-4 items-center max-w-container mx-auto py-4">
        <div className="col-span-3">
          <Link to={'/'} className="text-4xl font-extrabold text-primary">
            ShopCraftify
          </Link>
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
          
          <div onClick={handleCart} className="w-11 relative h-11 rounded-full border-2 border-[rgba(1,15,28,0.1)] p-3.5 cursor-pointer">
            <FaUser  />
            {
              show &&
              <div ref={mobileNavRef} className=" mt-7 flex flex-col w-40 bg-slate-200  absolute top-6 rounded -left-8  p-3">
                  <Link className="hover:text-blue-500 text-xl font-semibold" to="/registration">Registration</Link>
                  <Link className="hover:text-blue-500 text-xl font-semibold" to="/login">Login</Link>
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
