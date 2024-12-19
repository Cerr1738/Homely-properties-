import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../images/arrow.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-auto w-[80%] sm:w-[1060px] bg-[#966453] rounded-[25px] m-auto p-4 mt-[150px] mb-[100px]">
      <div className="w-full sm:w-[360px] p-6 bg-white rounded-[25px] flex flex-col items-center shadow-lg ">
        <img
          src={arrow}
          alt="Go back"
          className="cursor-pointer mb-6"
          onClick={() => navigate("/login")}
        />

        <form className="w-full h-[500px] sm:w-[300px] flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-center font-mono">Forget Password</h1>
          <p className="text-center text-sm text-gray-700">
            Enter your email address to get a new password
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brown-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-[300px] mt-4 px-4 py-2 bg-[#966453] text-white rounded-md transition-all"
            onClick={() => navigate('/continue')}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
