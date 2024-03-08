import React, { useState } from 'react'
import ProductDetailsImg from '../../assets/productdetails.png'
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import ProductImg from "../../assets/product.png";
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";
import  Breadcrumbs  from '../../components/layout/Breadcrumbs';

const Products = () => {
  const products = [
    {
      category: 'Electronics',
      title: 'Mini Portable Mobile Phone Powerbank for',
      price: '125.00$',
    }, {
      category: 'Electronics',
      title: 'Mini Portable Mobile Phone Powerbank for',
      price: '125.00$',
    }, {
      category: 'Electronics',
      title: 'Mini Portable Mobile Phone Powerbank for',
      price: '125.00$',
    }, {
      category: 'Electronics',
      title: 'Mini Portable Mobile Phone Powerbank for',
      price: '125.00$',
    },
  ];

  const [count, setCount] = useState(0);

  const handleCardPlus = () => {
    setCount(count + 1);
  };

  const handleCardMinus = () => {
    if (!count == 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className=' max-w-container mx-auto gap-10 '>{
    }
      <Breadcrumbs></Breadcrumbs>
      <div className=' max-w-container mx-auto flex flex-wrap gap-10 py-20'>
        <>
          <img src={ProductDetailsImg} alt="" />
        </>
        <div>
          <h2 className=' font-medium font-jost text-primary text-[32px] w-[440px] '>Playstation 4 2TB Slim Gaming Console</h2>
          <p className=' text-second-primary my-4 p-2 bg-[rgba(9,136,255,0.1)] inline-block text-base font-medium'>In Stock</p>
          <p className=' font-jost text-primary font-medium pb-2 text-2xl'>239.00$</p>

          <div className='flex gap-2 my-2'>
            <div className=' bg-[#F3F5F6] flex justify-between items-center gap-4 p-3 '>
              <FiPlus onClick={handleCardPlus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></FiPlus>
              <span>{count}</span>
              <HiMinus onClick={handleCardMinus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></HiMinus>
            </div>

            <button className='py-2 border-[1px] border-[#E0E2E3] w-9/12 font-normal text-base'>Add to cart</button>
          </div>
          <button type="button" className='py-3 bg-second-primary w-full text-white font-jost font-medium text-base'>Buy Now</button>
          <div className=' flex items-center gap-3 py-4 border-b-2 border-r-emerald-800'>
            <div className=' flex items-center gap-1 text-base cursor-pointer hover:text-second-primary duration-300'>
              <GoArrowSwitch></GoArrowSwitch>
              Compare
            </div>

            <div className=' flex items-center gap-1 text-base cursor-pointer hover:text-second-primary duration-300'>
              <CiHeart></CiHeart>
              Add To Wishlist
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-container mx-auto py-20'>
        <div className='mx-auto text-center mb-10'>
          <h4 className='text-second-primary text-base'>Next day Products</h4>
          <h2 className='text-primary text-[44px] font-medium'>Related products</h2>
        </div>

        <div className=' flex gap-10'>
          {products.map((product, index) => (
            <div key={index} className="w-[300px] border-[0.5px] border-gray-200 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group ">
              <div className="h-[240px] overflow-hidden relative">
                <img className="group-hover:scale-125 duration-500" src={ProductImg} alt="" />
                <div className="absolute top-[40%] right-[-20%] group-hover:right-5 text-2xl p-2 gap-4 flex flex-col shadow-lg rounded-md duration-300">
                  <IoCartOutline></IoCartOutline>
                  <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                  <CiHeart></CiHeart>
                </div>
              </div>
              <div className="py-5 pl-4 border-t-[0.5px] border-gray-200">
                <p className="text-third-primary font-roboto font-medium">
                  {product.category}
                </p>
                <h4 className="text-lg font-medium text-primary w-[300px] py-2">
                  {product.title}
                </h4>
                <p className="text-[#0989FF] font-roboto font-bold text-base">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products