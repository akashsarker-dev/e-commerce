import React from 'react'
import Navbar from '../navbar/Navbar'
import SearchNav from '../searchnav/searchnav'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export const Rootlayout = () => {
  return (
    <div>
        <SearchNav></SearchNav>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
