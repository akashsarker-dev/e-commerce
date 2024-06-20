import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
 
  return (

    <div className="my-4">
      <Link to={`/products/${product._id}`} className="bg-white shadow-md rounded-md p-4 flex hover:underline">
        <img className="w-20 h-20 object-cover rounded-md mr-4" src={product.variants[0]?.image} alt={product.name} />
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-800 font-bold mt-2">${product.variants[0]?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
