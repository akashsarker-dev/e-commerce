import React, { useEffect, useState } from 'react';
import  Breadcrumbs  from '../../components/layout/Breadcrumbs';
import Paginate from '../../components/layout/Paginate';

export default function Productinfo() {
  return (
    <div className=' max-w-container mx-auto'>
        <Breadcrumbs></Breadcrumbs>

        <div className=' flex gap-5 py-32'>
            <div className='w-1/5 bg-red-300'>rdjgjdnfgsnd</div>
            <div className='w-4/5 bg-red-500 p-10'>
                <Paginate itemsPerPage={6} ></Paginate>
            </div>
        </div>
    </div>
  )
}
