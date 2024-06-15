import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserButton from "../userbutton/UserButton";
import { FaUser } from "react-icons/fa6";

const SearchNav = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleUserButtonClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  return (
    <div className="border-2 border-[#00000021]">
      <div className="grid grid-cols-12 gap-4 items-center max-w-container mx-auto py-4">
        <div className="col-span-3">
          <Link to={'/'} className="text-4xl font-extrabold text-primary">
            ShopCraftify
          </Link>
        </div>
        <div className="col-span-6">
          <div className="relative bg-white border-4 border-second-primary py-3 px-5 w-[600px] rounded-lg mx-auto">
            <input
              className="text-lg focus:outline-none w-[90%]"
              type="search"
              placeholder="Search Products"
            />
            <div className="py-4 px-5 absolute top-0 right-0 w-15 h-full bg-second-primary">
              <IoSearch className="text-white text-2xl" />
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-end items-center gap-6">
          <div
            onClick={handleUserButtonClick}
            className="w-11 relative h-11 rounded-full border-2 border-[rgba(1,15,28,0.1)] p-3.5 cursor-pointer"
          >
            <FaUser />
            {showUserMenu && <UserButton ref={mobileNavRef} />}
          </div>
          <FaShoppingCart className="text-2xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
