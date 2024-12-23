import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../images/Logo.png";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="p-4 bg-[#503025]  flex items-center justify-between font-small">
        <div >
          <Link to="/">
            <img src={Logo} alt="Logo" className=" mx-[100px]" />
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

        {/* Links */}
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
                Landlords
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-9 p-4 md:p-0">
            <Link to="/signup">
              <button className="w-[100px] h-[40px] rounded-[5px] border bg-white border-white">
                Log In
              </button>
            </Link>

            <Link to="/login">
              <button className="w-[100px] h-[40px] bg-[#966453] rounded-[5px]">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
