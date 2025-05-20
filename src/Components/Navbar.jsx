import React, { useState } from "react";
import { useSelector } from "react-redux";
import { navbarData } from "../Slices/NavbarSlice";
import image from "../assets/home-banner/getstart.jpg";

function Navbar() {
  const navbarList = useSelector(navbarData);
  const [active, setActive] = useState("Home");

  return (
    <div className="flex justify-center gap-10 pb-6 items-center">
      <div className="flex justify-center gap-10 items-center">
        {navbarList.map((value) => {
          return (
            <>
              <p
                key={value.id}
                className={`${
                  active == value.label ? "text-[#e1224c]" : ""
                } duration-500 text-lg cursor-pointer font-Nunito`}
                onClick={() => setActive(value.label)}
              >
                {value.label}
              </p>
            </>
          );
        })}
      </div>
      <div>
        {/* <p
          className="cursor-pointer rounded-full px-5 py-3  font-Nunito text-xl bg-cover hover:scale-110 duration-500   transition-all"
          style={{ backgroundImage: `url(${image})` }}
        >
          Get Started
        </p> */}
      </div>
    </div>
  );
}

export default Navbar;
