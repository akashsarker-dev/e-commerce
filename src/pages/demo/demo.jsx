import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Demo = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-100  min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Beauty</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-center">
            <img className="w-40 h-40 rounded-lg" src="path/to/your/image.png" alt="Airspun Loose Face Powder" />
            <div className="ml-5">
              <h3 className="text-2xl font-semibold">Airspun Loose Face Powder</h3>
              <p className="text-lg text-gray-700 mt-2">$53.00</p>
              <p className="text-sm text-gray-500 mt-2">A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
              <div className="flex items-center mt-4">
                <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded-l">-</button>
                <input type="text" className="w-12 text-center border-t border-b border-gray-200 py-1" value={quantity} readOnly />
                <button onClick={increaseQuantity} className="bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded-r">+</button>
              </div>
              <div className="mt-5">
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Add to cart</button>
                <button className="ml-2 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">Buy Now</button>
              </div>
              <button className="mt-3 text-gray-500 hover:text-gray-700">Compare</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
