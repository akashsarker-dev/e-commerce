import React, { useEffect, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { BiMenuAltRight } from 'react-icons/bi';
import UserButton from '../userbutton/UserButton';
import CartPopup from '../layout/Cartpopup';
import SearchNavSidebar from '../layout/SearchNavSidebar';
import SearchProducts from '../searchproducts/SearchProducts';

const SearchNav = ({ className }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [cardPopup, setCardPopup] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setCardPopup(false);
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handlePopupCard = () => {
    setCardPopup((prev) => !prev);
  };

  const handleUserButtonClick = () => {
    setShowUserMenu((prev) => !prev);
  };



  return (
    <div className="border-2 border-[#00000021] z-50 fixed w-full bg-white top-0 left-0 bg-inherit shadow-md ">
      <div className="sm:grid flex items-center justify-between grid-cols-12 gap-4 max-w-container mx-auto sm:py-4 p-4 ">
        <div className="col-span-3">
          <Link to="/" className="md:text-3xl text-2xl font-bold text-black">
          Shofy.
          </Link>
        </div>
        <div className="col-span-6 hidden sm:block">
          {/* <div className="relative bg-white border-4 border-second-primary py-3 px-5 md:w-[600px] w-full rounded-lg mx-auto">
            <input
              className="text-lg focus:outline-none w-[90%]"
              type="search"
              placeholder="Search Products"
            />
            <div className="py-4 px-5 absolute top-0 right-0 w-15 h-full bg-second-primary">
              <IoSearch className="text-white text-2xl" />
            </div>
          </div> */}


          <SearchProducts/>
        </div>
        <div className="col-span-3 flex justify-end items-center gap-6">
          <div
            onClick={handleUserButtonClick}
            className="w-11 relative h-11 rounded-full border-2 border-[rgba(1,15,28,0.1)] p-3.5 cursor-pointer hidden sm:block">
            <FaUser />
            {showUserMenu && <UserButton ref={mobileNavRef} />}
          </div>
          <div className="relative">
            <FaShoppingCart
              onClick={handlePopupCard}
              className="text-2xl text-primary cursor-pointer "
            />
            {cardPopup && <CartPopup ref={mobileNavRef} className="absolute right-0 top-8" />}
          </div>
          <div className=" sm:hidden block">
            <SearchNavSidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
