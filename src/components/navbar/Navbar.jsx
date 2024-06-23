import React, { useEffect, useRef, useState } from "react";
// import Logo from '../../assets/Logo.png'
import { BiMenuAltLeft } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {

  return (
    <>
      <div class=" hidden sm:grid grid-cols-12 gap-4 max-w-container mx-auto py-8">
       
        <div class="col-span-12 mx-auto">
          <ul className="flex gap-10 text-xl font-medium font-roboto text-primary">
            <Link to={"/"}>
              Home
            </Link>
            <Link Link to={"/products"}>Products</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contactpage"}>Contacts</Link>
          <div className=" flex items-center gap-3">
            <FiPhoneCall className=" text-2xl text-second-primary"></FiPhoneCall>
            <p className=" text-base font-roboto font-semibold">
              +012 235 4562
            </p>
          </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
