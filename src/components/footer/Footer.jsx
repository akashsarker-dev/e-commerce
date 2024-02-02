import React from "react";
import logo from "../../assets/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-container mx-auto flex flex-wrap justify-between py-16">
      
      <div className=" w-2/5 flex ">
        <div>

          <p className=" text-xl text-primary font-medium w-[320px] py-7">We are a team of designers and
developers that create high quality
WordPress</p>
<div className='flex gap-3'>
        <FaFacebookF></FaFacebookF>
        <FaLinkedinIn></FaLinkedinIn>
        <FaInstagram></FaInstagram>
    </div>
        </div>
      </div>
      <div className="w-3/5 flex justify-between">
        <div>
          <p>MENU</p>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p>MENU</p>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p>MENU</p>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
