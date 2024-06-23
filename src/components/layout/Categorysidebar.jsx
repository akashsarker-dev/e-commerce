import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import CategoryLi from './../utils/CategoryLi';

export default function Categorysidebar() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getAllCategory() {
      try {
        const response = await axios.get('https://e-commerce-backend-phi-eight.vercel.app/api/v1/category/getallcategory');
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    getAllCategory();
  }, []);

  return (
    <div>
      <h4 onClick={() => setShow(!show)} className='font-bold text-xl text-[#262626] mb-4 flex items-center justify-between cursor-pointer'>
        Shop by Brand
        <IoMdArrowDropdown className={`h-14 ${show ? 'rotate-180 duration-300' : ''}`} />
      </h4>
      {show && (
        <ul className='duration-300'>
          {category.map((category, index) => (
            <div key={index}>
              <CategoryLi title={category.name} subcategory={category.subCategory} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
