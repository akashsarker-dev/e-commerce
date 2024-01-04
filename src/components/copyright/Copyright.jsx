import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className='flex justify-between py-4'>
    <div className='flex gap-3'>
        <FaFacebookF></FaFacebookF>
        <FaLinkedinIn></FaLinkedinIn>
        <FaInstagram></FaInstagram>
    </div>
    <div>2020 Orebi Minimal eCommerce Figma Template by Adveits</div>
    </div>
  )
}

export default Copyright