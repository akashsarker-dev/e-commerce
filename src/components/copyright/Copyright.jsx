import React from 'react'
import Payment from '../../assets/payment.png'

const Copyright = () => {
  return (
    <div className='bg-[#F4F7F9]'>
    <div className='flex justify-between py-4 container max-w-container mx-auto border-[#E3E7EA] border-t-2'>
    <div className='flex gap-3'>
        <img src={Payment} />
    </div>
    <div className='py-4 text-[#888A8C]'>© 2023 All Rights Reserved | WooCommerce Theme by Themepure</div>
    </div>
    </div>
  )
}

export default Copyright