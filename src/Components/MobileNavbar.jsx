import React, { useState } from "react";
import { RiMenuFold2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { navbarData } from "../Slices/NavbarSlice";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/logo png/logo.png";
import image from "../assets/home-banner/getstart.jpg"


function MobileNavbar() {
  const navbarList = useSelector(navbarData);
  const [show, setShow] = useState(false);
  const [active,setActive]=useState("Home")
  return (
    <>
      <div className="absolute top-2  cursor-pointer w-1/2 ">
        <div
          className={`${!show ? "block" : "hidden"} `}
          onClick={() => setShow(!show)}
        >
          <RiMenuFold2Line size={40} />
        </div>
        <div className={`${show ? "translate-x-0" : "-translate-x-full"} duration-1000 bg-black`}>
        <div className={`${show ? "block" : "hidden"} w-full flex justify-between  text-gray-500 pt-2 px-2 text-2xl`} onClick={()=>setShow(!show)}>
      <div className='w-20'>
      <img src={logo} alt="" />
      </div>
   <FaXmark />
   </div>
   <div className='pt-5 w-1/2 h-screen overflow-hidden px-2'>
    {navbarList.map((value)=>{
      return <>
      <div className={`${active == value.label ? "text-[#e1224c]" : ""} flex gap-4 items-center`} onClick={()=>setActive(value.label)}>
            <p>{value.icon}</p>
      <p className='py-2 font-semibold text-lg font-Nunito' key={value.id}>{value.label}</p>
      </div>
     
      </>
    })}
    </div>
  
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
