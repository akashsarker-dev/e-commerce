import React from 'react'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center container mx-auto py-8'>
    <div className='w-2/5'>
        <img src={Logo}/>
    </div>

    <div className='w-3/5'>
        <ul className='flex gap-10 text-base font-normal font-dm-sans'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
