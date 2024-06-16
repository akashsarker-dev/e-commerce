import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const CartPopup = forwardRef(({ className, props }, ref) => {
  const data = useSelector(state =>(state.cartDetails.value));
  console.log(data);
  return (
    <div ref={ref} className={`z-50 w-64 p-4 bg-gray-100 rounded-lg shadow-lg ${className}`}>
      { data.length > 0 &&
        data.map((item, index) => (
          console.log(item),
          <>
          <div key={index} className="flex items-center  justify-between">
            <div className="w-16 h-16 bg-gray-300 rounded mt-2">
              <img src={item.image} alt="" />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">$ {item.price}</p>
            </div>
            <button className="ml-auto text-gray-600 ">&times;</button>
          </div>
        
      
      
      </>
          
        ))
      }
       <div className="mt-4">
        <p className="text-lg font-semibold">Subtotal: $44.00</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">View Cart</button>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Checkout</button>
      </div> 
     
    </div>
  );
});

export default CartPopup;
