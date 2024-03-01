import React, { useEffect, useRef, useState } from "react";
// import Logo from '../../assets/Logo.png'
import { BiMenuAltLeft } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const mobileNavRef = useRef(null);

  const handleSidebar = () => {
    setSidebar(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!mobileNavRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
  });

  const closeMobileMenu = () => {
    setSidebar(false);
  };
  return (
    <>
      <div class="grid grid-cols-12 gap-4 max-w-container mx-auto py-8">
        <div class="col-span-3">
          <div>
            <BiMenuAltLeft
              onClick={handleSidebar}
              className=" text-4xl relative"
            ></BiMenuAltLeft>
          </div>
        </div>
        <div class="col-span-6 mx-auto">
          <ul className="flex gap-10 text-xl font-medium font-roboto text-primary">
            <li>
              <Link>Home</Link>
            </li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div class="col-span-3">
          <div className=" flex items-center gap-3">
            <FiPhoneCall className=" text-2xl text-second-primary"></FiPhoneCall>
            <p className=" text-base font-roboto font-semibold">
              +012 235 4562
            </p>
          </div>
        </div>
      </div>
      {sidebar && (
        <div
          ref={mobileNavRef}
          className=" w-[260px] bg-[#2D2D2D] z-40  mt-40 ml-20 absolute top-5 left-3">
          <ul>
            <li className=" flex items-center justify-between py-4 px-5 text-base font-roboto text-[rgba(255,255,255,0.7)] border-b-[1px] border-[#3b3b3b] ">
              Furniture <FaAngleRight></FaAngleRight>
            </li>
            <li className=" flex items-center justify-between py-4 px-5 text-base font-roboto text-[rgba(255,255,255,0.7)] border-b-[1px] border-[#3b3b3b] ">
              Furniture <FaAngleRight></FaAngleRight>
            </li>
            <li className=" flex items-center justify-between py-4 px-5 text-base font-roboto text-[rgba(255,255,255,0.7)] border-b-[1px] border-[#3b3b3b] ">
              Furniture <FaAngleRight></FaAngleRight>
            </li>
            <li className=" flex items-center justify-between py-4 px-5 text-base font-roboto text-[rgba(255,255,255,0.7)] border-b-[1px] border-[#3b3b3b] ">
              Furniture <FaAngleRight></FaAngleRight>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
