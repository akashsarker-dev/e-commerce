import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Badge = () => {
  return (
    <>
      <div className=" absolute top-[40%] right-[-20%] group-hover:right-5 text-2xl p-2 gap-4 flex flex-col shadow-lg rounded-md duration-300">
        <IoCartOutline></IoCartOutline>
        <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
        <CiHeart></CiHeart>
      </div>
    </>
  );
};
