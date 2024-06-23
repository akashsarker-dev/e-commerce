import React from "react";
import logo from "../../assets/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-[#F4F7F9] px-2">
      <div className="max-w-container  mx-auto flex flex-wrap gap-4 py-16">
        <div className=" sm:w-1/3 flex flex-wrap ">
          <div>
            <p className=" text-xl text-primary font-medium w-[320px] py-7">
              We are a team of designers and developers that create high quality
              WordPress
            </p>
            <div className="flex gap-3">
              <div className=" bg-[#0000001f]  text-primary p-4 rounded-full text-xl">
                <FaFacebookF />
              </div>
              <div className=" bg-[#0000001f]  text-primary p-4 rounded-full text-xl">
                <FaLinkedinIn />
              </div>
              <div className=" bg-[#0000001f]  text-primary p-4 rounded-full text-xl">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className=" gap-4 flex flex-wrap justify-between sm:justify-around ">
          <div>
            <h4 className=" text-primary text-xl font-roboto font-bold">
              My Account
            </h4>
            <ul className="flex flex-col text-third-primary text-base font-medium gap-3 mt-3">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className=" text-primary text-xl font-roboto font-bold">
              My Account
            </h4>
            <ul className="flex flex-col text-third-primary text-base font-medium gap-3 mt-3">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className=" text-primary text-xl font-roboto font-bold">
              Talk To Us
            </h4>
            <>
              <div className="flex items-center gap-3 mt-3">
                <MdOutlineMarkEmailRead className=" text-primary text-2xl" />
                <p className="text-xl text-third-primary font-normal">
                  shopcraftify@info.com
                </p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <HiOutlineLocationMarker className=" text-primary text-2xl" />
                <p className="text-xl text-third-primary font-normal">
                   Jamaica, New York 1432
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
