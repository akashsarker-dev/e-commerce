import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

const SearchNav = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-5 flex">
        <div className="flex items-center">
          <MdOutlineSort />
          Shop by
        </div>
        <div className=" bg-white py-4 px-5 w-[600px] rounded-lg mx-auto">
          <input className=" text-sm focus:outline-none w-[95%] "
            type="search"
            placeholder="Search Products"/>
          <button type="button">
            <IoSearch ></IoSearch>
          </button>
        </div>
        <div className="flex items-center">
          <>
            <FaUser />
            <GoTriangleDown />
          </>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
