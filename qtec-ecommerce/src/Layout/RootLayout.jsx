import React from 'react'
import { Outlet } from 'react-router'
import Language from '../Components/Language'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const RootLayout = () => {
  return (
    <div>
        <Language></Language>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout