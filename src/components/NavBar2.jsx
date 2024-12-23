import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../images/Logo.png";
import avatar from "../images/avatar.png"

const NavBar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="p-4 bg-[#503025]  flex items-center justify-between font-small">
            <div>
            <Link to="/">
                <img src={Logo} alt="Logo" className=" mx-[100px] mr-[140px]" />
            </Link>
            </div>

            <div
            className="burger-icon md:hidden text-white text-2xl cursor-pointer "
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex="0"
            >
            &#9776;
            </div>

            <div
            className={`absolute md:static top-14 left-0 w-full bg-[#503025] gap-40 md:bg-transparent z-10 md:z-auto md:flex items-center transition-all duration-300 ease-in-out ${
                isMenuOpen ? "block" : "hidden"
            }`}
            >
            <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-9 p-4 md:p-0">
                <li>
                <Link className="text-white" to="/">
                    Home
                </Link>
                </li>
                <li>
                <Link className="text-white" to="/about">
                    About
                </Link>
                </li>
                <li>
                <Link className="text-white" to="/accommodations">
                    Accommodations
                </Link>
                </li>
                <li>
                <Link className="text-white" to="/landlords">
                    WatchList
                </Link>
                </li>
                <li>
                <Link className="text-white" to="/contact">
                    Contact
                </Link>
                </li>
            </ul>
            </div>
            <div className="flex items-center gap-4 mx-[120px]">
                <button className="p-2 rounded-full hover:bg-gray-100 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src= {avatar}
                    alt="User Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            
      </nav>
      
            
    </header>
  );
};

export default NavBar2;
