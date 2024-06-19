import React, { useEffect, useRef, useState } from "react";
// import Logo from '../../assets/Logo.png'
import { BiMenuAltLeft } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  // const mobileNavRef = useRef(null);

  const handleSidebar = () => {
    setSidebar(true);
  };

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
    setSidebar(false);
  };
  
  return (
    <>
      <div class=" hidden sm:grid grid-cols-12 gap-4 max-w-container mx-auto py-8">
       
        <div class="col-span-6 mx-auto">
          <ul className="flex gap-10 text-xl font-medium font-roboto text-primary">
            <Link to={"/"}>
              Home
            </Link>
            <Link Link to={"/shop"}>Shop</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contacts</Link>
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
    </>
  );
};

export default Navbar;
