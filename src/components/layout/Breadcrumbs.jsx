import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function breadcrumbs() {
  return (
    <div>
      <h2 className=" font-bold text-[49px] text-primary">Products</h2>
      <p className=" flex items-center text-base">
        <Link to="/">Home</Link>
        <IoIosArrowForward></IoIosArrowForward>
        <Link>{window.location.pathname.split("/")[1]} </Link>{" "}
      </p>
    </div>
  );
}
