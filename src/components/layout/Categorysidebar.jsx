// Categorysidebar.js
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Categorysidebar() {
  const [show , setShow] = useState()

  return (
    <div>
      <h4 onClick={()=>setShow(!show)}
        className='font-bold text-xl text-[#262626] mb-4 flex items-center justify-between cursor-pointer' >
        Shop by Brand{' '}
        <IoMdArrowDropdown className={`h-14 ${show ? 'rotate-180 duration-300' : ''}`} />
      </h4>
      {show && (
        <ul className='duration-300'>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
          Category 1
          </li>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
          Category 2
          </li>
          <li className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
          Category 3
          </li>
        </ul>
      )}
    </div>
  );
}
