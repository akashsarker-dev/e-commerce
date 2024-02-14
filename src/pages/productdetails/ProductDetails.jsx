import React from 'react'
import ProductDetailsImg from '../../assets/productdetails.png'

const ProductDetails = () => {
  return (
    <>
        <div className=' max-w-container mx-auto flex flex-wrap'>
            <>
                <img src={ProductDetailsImg} alt=""/>
            </>
            <div>
                <h2 className=' font-medium font-jost text-primary text-[32px] w-[440px] '>Playstation 4 2TB Slim Gaming Console</h2>
                <p className=' text-second-primary p-2 bg-[rgba(9,136,255,0.1)] inline-block text-base font-medium'>In Stock</p>
            </div>
        </div>
    </>
  )
}

export default ProductDetails