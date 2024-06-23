import React from 'react'

export default function Productdetails({product}) {
  const truncatedName = product.name.slice(0, 20);
  return (
    <>
    <div className="py-5 pl-4 border-t-[0.5px] border-gray-200">
    {/* <p className=" text-third-primary font-roboto font-medium">
      Electronics
    </p> */}
    <h4 className="sm:text-lg sm:font-medium text-primary w-[300px] py-2 ">
    {truncatedName}
    </h4>
    <p className="text-[#0989FF] font-roboto font-bold text-base">
      {product.variants[0].price}
    </p>
  </div>
  </>
  )
}
