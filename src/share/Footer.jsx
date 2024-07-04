import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import logo from '../assets/resources/logo light.png';
const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#020043]  text-white ">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 space-y-6">
          <Link
            to={"/"}
            className="lg:text-4xl no-underline  text-xl font-bold"
          >
            <img src={logo} alt="" />
          </Link>
          <p className="max-w-sm">
          123 Main Street Anytown, USAPostal Code: 12345

Support: support@oyolloo.com
Available : 10:00am to 07:00pm
          </p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 lg:grid-cols-3">
          <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-gray-900">
             quick links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link className="hover:border-b-2 border-green-500" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 border-green-500"
                  
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 border-green-500"
                
                >
                  success page
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 border-green-500"
                
                >
                 Terms and condition
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
             service
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" x>
                 scheduling
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" >
                  contactus
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" >
                  patient portal
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Follow us</h3>
            <div className="space-y-3">
            <div className="uppercase dark:text-gray-900"></div>
            <div className="flex justify-start space-x-6">
              <Link
                
              
              >
                <FaFacebook size={25} />
              </Link>
          

              <Link
                
                
              >
                <CiLinkedin size={25} />
              </Link> 
            </div>
              <p>@docplus 2024</p>
          </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2024 <span className="text-green-500">M</span>EHEDI<span className="text-green-500">.</span>All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
