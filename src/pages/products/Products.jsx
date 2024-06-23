import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { HiMinus } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import { GoArrowSwitch } from 'react-icons/go';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../../components/utils/Breadcrumbs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/CartSlice';


const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://e-commerce-backend-phi-eight.vercel.app/api/v1/product/getallproduct/${id}`);
        setProduct(response.data);
        setSelectedVariant(response.data.variants[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchData();
  }, [id]);

  const handleThumbnailClick = (variant) => {
    setSelectedVariant(variant);
  };
  if (!product) return null;

  const dispatch = useDispatch();
  const handleAddCard = () => {
    dispatch(addToCart({...selectedVariant, qun : 1}));
    localStorage.setItem('cartDetails', JSON.stringify(selectedVariant));
    console.log(selectedVariant);
  };
  return (
    <div className="max-w-container mx-auto gap-10 px-2">
      <Breadcrumbs />
      <div className="max-w-container mx-auto flex flex-wrap gap-10 py-20">
        <div>
          <img className="sm:w-[440px] " src={selectedVariant.image} alt="" />
          <div className="sm:w-[600px]  h-[100px] flex gap-4 mt-4">
            {product.variants.map((variant) => (
              <img
                key={variant._id}
                className="w-[100px] h-[100px] cursor-pointer"
                src={variant.image}
                alt=""
                onClick={() => handleThumbnailClick(variant)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-medium font-jost text-primary text-2xl sm:text-[32px] sm:w-[440px]">{product.name}</h2>
          <p className="text-second-primary my-4 p-2 bg-[rgba(9,136,255,0.1)] inline-block text-base font-medium">In Stock</p>
          <p className="font-jost text-primary font-medium pb-2 text-2xl">Price : {selectedVariant.price} $</p>
          <p className="font-jost text-primary font-normal pb-2 text-xl">Quantity : {selectedVariant.quantity} </p>

          <div className="flex flex-wrap gap-2 my-2">
            

            <button onClick={handleAddCard} className="py-3 border-[1px] border-[#E0E2E3] w-[160px] sm:w-full font-normal text-base">Add to cart</button>
          <button type="button" className="py-3 bg-second-primary w-[160px] sm:w-full  text-white font-jost font-medium text-base">
            <Link to={`/cart`}>Buy Now</Link>
          </button>
          </div>


          <div className="flex items-center sm:w-full w-[300px] gap-3 py-4 border-b-2 border-r-emerald-800">
            <div className="flex items-center gap-1 text-base cursor-pointer hover:text-second-primary duration-300">
              <GoArrowSwitch />
              Compare
            </div>

            <div className="flex items-center gap-1 text-base cursor-pointer hover:text-second-primary duration-300">
              <CiHeart />
              Add To Wishlist
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
