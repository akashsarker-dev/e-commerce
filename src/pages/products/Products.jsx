import React, { useEffect, useState } from 'react'
import ProductDetailsImg from '../../assets/productdetails.png'
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { GoArrowSwitch } from "react-icons/go";
import ProductImg from "../../assets/product.png";
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Breadcrumbs from '../../components/utils/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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

  const { id } = useParams()



  const [product, setProduct] = useState([]);
  // console.log(product);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/product/getallproduct');
        setProduct(response?.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchData();
  }, []);
  const data = product.find(item => item._id === id)
  console.log(data, 'data');
  return (
    <div className=' max-w-container mx-auto gap-10 '>{
    }
      <Breadcrumbs></Breadcrumbs>
      {
        data &&
        <>
          {
            product?.map((item, index) => (
              console.log(item, 'item'),
              <div className=' max-w-container mx-auto flex gap-10 py-20'>
                <div >
                  <>
                  <img className='w-[440px]' src={item.variants[0].image} alt="" srcset="" />
                  </>
                <div className='w-[600px] h-[600px] flex  gap-4'>

                  <img className='w-[100px] h-[100px]' src={ProductDetailsImg} alt="" srcset="" />
                  <img className='w-[100px] h-[100px]' src={ProductDetailsImg} alt="" srcset="" />
                  <img className='w-[100px] h-[100px]' src={ProductDetailsImg} alt="" srcset="" />
                </div>
                </div>

                <div>
                  <h2 className=' font-medium font-jost text-primary text-[32px] w-[440px] '>{item.name}</h2>
                  <p className=' text-second-primary my-4 p-2 bg-[rgba(9,136,255,0.1)] inline-block text-base font-medium'>In Stock</p>
                  <p className=' font-jost text-primary font-medium pb-2 text-2xl'>Price : {item.variants[0].price} $</p>

                  <div className='flex gap-2 my-2'>
                    <div className=' bg-[#F3F5F6] flex justify-between items-center gap-4 p-3 '>
                      <FiPlus onClick={handleCardPlus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></FiPlus>
                      <span>{count}</span>
                      <HiMinus onClick={handleCardMinus} className='p-2 hover:bg-white rounded-full text-3xl font-semibold duration-300 cursor-pointer'></HiMinus>
                    </div>

                    <button className='py-2 border-[1px] border-[#E0E2E3] w-9/12 font-normal text-base'>Add to cart</button>
                  </div>
                  <button type="button" className='py-3 bg-second-primary w-full text-white font-jost font-medium text-base'>
                    <Link to={`/cart`}>Buy Now</Link>
                  </button>
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
            ))
          }
        </>
      }

    </div>
  )
}

export default Products