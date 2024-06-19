

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className=" absolute top-0 left-[50%] translate-x-[-50%] my-20">
      <Link to={`/products/${product._id}`} className='bg-white shadow-md rounded-md p-4 flex hover:underline'>
      <img className='w-[80px]' src={product.variants[0].image} alt={product.name} />
      <div className='text-center flex flex-col'>
      <h3 className='text-lg font-bold'>{product.name}</h3>
      
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
