import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className='flex justify-between py-4 container max-w-container mx-auto border-teal-100 border-t-2'>
    <div className='flex gap-3'>
        <FaFacebookF></FaFacebookF>
        <FaLinkedinIn></FaLinkedinIn>
        <FaInstagram></FaInstagram>
    </div>
    <div className='py-4'>2020 Orebi Minimal eCommerce Figma Template by Adveits</div>
    </div>
  )
}

export default Copyright