// Leftsidebar.js
import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Brandsidebar() {
  const [show , setShow] = useState()

  return (
    <div>
      <h4 onClick={()=>setShow(!show)}
        className='font-bold text-xl text-[#262626] mb-4 flex items-center justify-between cursor-pointer'>
        Shop by Category
        {
          !show ?
        <GoPlus className={`h-14 ${show ? 'rotate-180 duration-300' : ''}`} />
        :
        <HiMinusSm className="h-14" />

        }
      </h4>
      {show && (
         <ul>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
            Brand 1
          </li>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
            Brand 1
          </li>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
            Brand 1
          </li>
        </ul>
      )}
    </div>
  );
}
