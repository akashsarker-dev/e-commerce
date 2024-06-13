import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function CategoryLi({ title, subcategory }) {
  const [showSub, setShowSub] = useState(false);

  return (
    <div>
      <li
        onClick={() => setShowSub(!showSub)}
        className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676] flex items-center justify-between'
      >
        {title}
        <IoMdArrowDropdown className={`h-14 ${showSub ? 'rotate-180 duration-300' : ''}`} />
      </li>
      {showSub && subcategory && ( // Render subcategory only if showSub is true and subcategory exists
        <ul className='duration-300'>
          {subcategory.map((subItem, subIndex) => (
            <li key={subIndex} className='h-10 border-b-[1px] border-[#D8D8D8] text-[#767676]'>
              {subItem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
