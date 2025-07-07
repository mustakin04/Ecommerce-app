import React from 'react'
import Language from '../Component/Language'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

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