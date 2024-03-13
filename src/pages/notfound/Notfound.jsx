import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className=' max-w-container mx-auto flex justify-center pb-10'>
       <div>
       <h1 className=' text-[150px] text-primary font-bold'>404</h1>
        <p className=' text-[#767676] text-base w-[644px] pb-10'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
 
            <Link  className=' font-bold text-base py-4 px-12 hover:bg-second-primary bg-primary duration-500 text-white w-fit' to={'/'}>Back to Home</Link>

       </div>
    </div>
  )
}
