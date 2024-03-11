import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import Paginate from '../../components/layout/Paginate';

export default function Productinfo() {
  return (
    <div className=' max-w-container mx-auto'>
      <Breadcrumbs></Breadcrumbs>

      <div className=' flex gap-5 py-20'>
        <div className='w-1/5 bg-red-300'>rdjgjdnfgsnd</div>
        <div className='w-4/5 bg-slate-200 p-10 rounded-lg'>
          <div className=" mb-10 flex items-center gap-6 justify-end">
            <>
            <label htmlFor="countries">Sort by :</label>

            <form class="w-[240px] ">
             
              <select id="countries" class="bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#F0F0F0] block w-full p-2.5 cursor-pointer ">
                <option selected>Featured</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            
            </>
             <>
            <label htmlFor="countries">Show :</label>

            <form class="w-[240px] ">
             
              <select id="countries" class="bg-gray-50 border border-[#F0F0F0] text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#F0F0F0] block w-full p-2.5 cursor-pointer ">
                <option selected>show items</option>
                <option value="US">12</option>
                <option value="CA">24</option>
                <option value="FR">36</option>
                <option value="DE">48</option>
              </select>
            </form>
            
            </>

          </div>
          <Paginate itemsPerPage={6}></Paginate>
        </div>
      </div>
    </div>
  )
}
