import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import logo from "../assets/resources/logo dark.png"
const Navbar = () => {
  const [open, setopen] = useState(false);

  const navbar = (
    <div className="gap-2 lg:flex md:flex items-center justify-center  space-y-2  ">
      <li className="font-semibold text-[16px] text-[#020043] mt-2  ">
      <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? " hover:text-[#FFC107]"
          : " hover:text-[#FFC107]  "
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Home
    </NavLink>
      </li>
      <li className="font-semibold text-[16px] text-[#020043]  ">
      <NavLink
      
      className={({ isActive }) =>
        isActive
          ? " hover:text-[#FFC107]"
          : " hover:text-[#FFC107]  "
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Services
    </NavLink>
      </li>
      <li className="font-semibold text-[16px] text-[#020043]  ">
      <NavLink
     
      className={({ isActive }) =>
        isActive
          ? " hover:text-[#FFC107]"
          : " hover:text-[#FFC107]  "
      }
    >
      <FaHome className="lg:hidden md:hidden" /> Blogs
    </NavLink>
      </li>
      <li className="font-semibold text-[16px] text-[#020043]  ">
      <NavLink
    
      className={({ isActive }) =>
        isActive
          ? " hover:text-[#FFC107]"
          : " hover:text-[#FFC107]  "
      }
    >
      <FaHome className="lg:hidden md:hidden" /> About Us
    </NavLink>
      </li>
     
     
    </div>
  );
  return (
    <div className="" >
      <div className="navbar container max-w-[1160px] mx-auto   w-full ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div className="md:hidden pr-2" onClick={() => setopen(!open)}>
            {open === true ? (
              <MdOutlineClose className="text-2xl "></MdOutlineClose>
            ) : (
              <LuMenu className="text-2xl"></LuMenu>
            )}
            <ul
              className={`menu absolute duration-1000
            ${open ? "-right-32 px-8 bg-slate-200" : "right-20"}
            mt-3 z-[2] p-2 shadow  h-lvh w-52`}
            >
              {navbar}
            </ul>
          </div>
        </div>
        <Link
          to={"/"}
         
        >
          <img className="max-w-28" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end md:flex hidden  lg:flex pr-12">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>

      <div className="navbar-end">
        <div className=" px-4">
          <button className="flex items-center justify-center gap-2 border-2 p-2 rounded-lg font-semibold">Appointment  <FaArrowRightLong/> </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
