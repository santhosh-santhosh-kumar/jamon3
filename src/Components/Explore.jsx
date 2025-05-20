import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

function Explore() {
  return (
    <div className="flex items-center  lg:mt-20 mt-10 lg:px-0 px-5">
      <div className="bg-[#231f20] flex items-center gap-4  px-6 py-4 rounded-[100px] cursor-pointer transition-all duration-1000 hover:bg-[#3f09ea] hover:scale-105">
        <p className="text-xl font-Nunito">Explore Now</p>
        <p className="text-xl transform transition-all duration-500">
          <FaCirclePlay size={30} />
        </p>
      </div>
 
    </div>
  );
}

export default Explore;
