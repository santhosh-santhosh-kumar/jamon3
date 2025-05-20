import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Body from '../Components/News/Body'

function Layout() {
  return (
    <>
    <Header />
    <Body />
    <Outlet /> 
    </>
  )
}

export default Layout