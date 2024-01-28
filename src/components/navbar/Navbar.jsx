import React from 'react'
// import Logo from '../../assets/Logo.png'
import { BiMenuAltLeft } from "react-icons/bi";


const Navbar = () => {
  return (


<div class="grid grid-cols-12 gap-4 max-w-container mx-auto py-8">
  <div class="col-span-3">    
  <div >
        <BiMenuAltLeft className=' text-4xl'></BiMenuAltLeft>
    </div>
    </div>
  <div class="col-span-6 mx-auto">
  <ul className='flex gap-10 text-xl font-medium font-roboto text-primary'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
  </div>
  <div class="col-span-3">03</div>
</div>
  )
}

export default Navbar
