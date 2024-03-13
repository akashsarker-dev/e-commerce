import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaCircle } from "react-icons/fa";

export default function Colorsidebar() {
  const [show, setShow] = useState()

  return (
    <div>
      <h4 onClick={() => setShow(!show)}
        className='font-bold text-xl text-[#262626] mb-4 flex items-center justify-between cursor-pointer' >
        Shop by Brand
        <IoMdArrowDropdown className={`h-14 ${show ? 'rotate-180 duration-300' : ''}`} />
      </h4>
      {show && (
        <ul className='duration-300'>
          <li className='h-10 border-b-[1px] flex items-center gap-3 border-[#D8D8D8] text-[#767676]'>
            <FaCircle></FaCircle>Color 1
          </li>
          <li className='h-10 border-b-[1px] flex items-center gap-3 border-[#D8D8D8] text-[#767676]'>
            <FaCircle className='text-[#FF8686]'></FaCircle>Color 2
          </li>
          <li className='h-10 border-b-[1px] flex items-center gap-3 border-[#D8D8D8] text-[#767676]'>
            <FaCircle className='text-[#7ED321]'></FaCircle>Color 3
          </li>
          
        </ul>
      )}
    </div>
  );
}
