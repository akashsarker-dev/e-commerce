import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchNav from './../../components/searchnav/SearchNav';
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';

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
