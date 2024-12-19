import React from "react";
import { useNavigate } from "react-router-dom";
import Homely from "./Homely";
import AppleLogo from "../images/AppleLogo.png";
import GoogleLogo from "../images/GoogleLogo.png";
import arrow from "../images/arrow.png";

const UserSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen mt-[60px] ">
      <div className=" max-w-[1060px] w-full h-auto p-6 flex flex-col lg:flex-row gap-8 bg-[#966453] items-center mx-[30px] mb-6 rounded-[40px]">
       
        <div className="flex-1">
          <Homely />
        </div>

       
        <div className="flex-1 max-w-md w-full bg-white rounded-[25px] p-6 shadow-md">
          <form className="flex flex-col">
            
            <div className="mb-4">
              <img
                src={arrow}
                alt="Back to Login"
                className="cursor-pointer w-6"
                onClick={() => navigate("/login")}
              />
            </div>

            <h2 className="text-center text-2xl font-semibold mb-2">Create Account</h2>
            <p className="text-left text-sm mb-6">
              Enter details below to create your real property account:
            </p>

         
            <input
              type="text"
              placeholder="Fullname"
              required
              className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 rounded-md border border-gray-400 mb-6 w-full focus:ring-2 focus:ring-[#966453]"
            />

          
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full py-3 bg-[#966453] text-white font-medium rounded-md hover:bg-[#82513a] transition"
            >
              Register
            </button>

         
            <div className="text-center mt-6">
              <h3 className="text-lg mb-2">Sign In with</h3>
              <div className="flex justify-center gap-4">
                <img src={AppleLogo} alt="Apple Logo" className="w-10 cursor-pointer" />
                <img src={GoogleLogo} alt="Google Logo" className="w-10 cursor-pointer" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
