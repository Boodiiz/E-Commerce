import React, { useEffect, useState } from 'react'
import Style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {

  const [counter, setCounter] = useState(0)
  useEffect(() => {}, [])
  
  return <>
        <Navbar/>
          <div className="container mx-auto my-6 py-16 px-2">
            <Outlet></Outlet>
          </div>
        <Footer/>
    </>
  
}
