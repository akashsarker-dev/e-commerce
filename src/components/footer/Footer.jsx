import React from 'react'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-between'>

        <div className='w-2/5 flex justify-between'>
           <div>
            <p>MENU</p>
           <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
           
           <div>
            <p>MENU</p>
           <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
           
            <div>
            <p>MENU</p>
           <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
        </div>
        <div className='w-3/5 flex '>
          <div>
            <p>(052) 611-5711
              company@domain.com</p>
              <p>575 Crescent Ave. Quakertown, PA 18951</p>
          </div> 
            <div>
              <img src={logo} alt="" srcset="" />
          </div>
        </div>
        
    </div>
  )
}

export default Footer