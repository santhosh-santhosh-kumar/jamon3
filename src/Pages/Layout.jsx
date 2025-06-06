import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Body from '../Components/News/Body'
import FooterColumn from '../Components/Footer/FooterColumn'
import FooterBottom from '../Components/Footer/FooterBottom'

function Layout() {
  return (
    <>
    <Header />
    <Body />
    <Outlet />
   <div className='px-10'>
     <FooterColumn />
     
   </div>
   <FooterBottom />
    </>
  )
}

export default Layout