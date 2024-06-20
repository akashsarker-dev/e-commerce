import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import SearchNav from '../searchnav/SearchNav'

export const Rootlayout = () => {
  return (
    <div>
      <div className=' mb-20'>
      
        <SearchNav></SearchNav>
      </div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
