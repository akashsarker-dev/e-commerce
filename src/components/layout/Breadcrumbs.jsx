import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  // console.log(pathSegments,'gggg');

  return (
    <div>
      <h2 className="font-bold text-[49px] text-primary">Products</h2>
      <p className="flex items-center text-base">
        <Link to="/">Home</Link>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <IoIosArrowForward />
            <Link to={`/${pathSegments.slice(0, index + 1).join("/")}`}>
              {segment}
            </Link>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
