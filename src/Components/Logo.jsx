import React from 'react'
import logo from "../assets/logo png/logo.png"
import image from "../assets/home-banner/getstart.jpg"

function Logo() {
  return (
      <>
      <div className='flex justify-center w-full'>
    <div className='pt-10 w-52'>
      <img src={logo} alt="" className=''/>
     
          
    </div>
    
   
    </div>
    <p className='text-[#e1224c] text-2xl flex justify-center mt-4 font-semibold'>Your Home for Urban Culture</p>
      </>
  )
}

export default Logo