import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  // console.log(pathSegments,'gggg');

  return (
    <div>
      <p className="flex items-center text-base mt-3">
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
