import React, { useState } from 'react';
import logo from '../images/Logo.png';
import avatar from '../images/avatar.png';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Header =() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b bg-[#503025] text-white">
      <div className="container  p-10 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex mx-[80px]">
            <img 
              src= {logo}
              alt="Homely Properties" 
              className=""
            />
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to= "/landlords" className="text-sm font-small focus:bg-[#F0D08C] p-2 rounded focus:text-black">
              Dashboard
            </Link>
            <Link to="/manage-listing" className="text-sm font-small focus:bg-[#F0D08C] p-2 rounded focus:text-black">
              Manage listings
            </Link>
            <Link to="/properties" className="text-sm font-small focus:bg-[#F0D08C] p-2 rounded focus:text-black">
              Properties analytics
            </Link>
            <Link to="/subscription" className="text-sm font-small focus:bg-[#F0D08C] p-2 rounded focus:text-black">
              Subscription
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 mx-[120px]">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
        
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src= {avatar}
              alt="User Avatar" 
              className="w-full h-full object-cover"
              onClick={() => navigate("/landlord-profile")}
            />
            <h1>William Scott</h1>
          </div>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#503025] border-t">
          <Link to="/dashboard" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Dashboard
          </Link>
          <Link to="/manage-listing" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Manage listings
          </Link>
          <Link to="/properties" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Properties analytics
          </Link>
          <Link to="/subscription" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Subscription
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;

