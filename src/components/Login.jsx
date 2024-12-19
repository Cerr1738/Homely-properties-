import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Homely from "./Homely";

const Login = () => {
  const navigate = useNavigate();

  return (
<div className="flex justify-center items-center min-h-screen  mt-[60px] ">
<div className=" max-w-[1060px] w-full h-auto p-6 flex flex-col lg:flex-row gap-8 bg-[#966453] items-center mx-[30px] mb-6 rounded-[40px]">
      
        <div className="flex-1">
          <Homely />
        </div>

       
        <div className="flex-1 max-w-md w-full  bg-white rounded-[25px] p-6 shadow-md">
          <form className="flex flex-col items-center h-[500px]">
           
            <button
              type="button"
              onClick={() => navigate("/usersignup")}
              className="w-full py-3 bg-[#966453] text-white rounded-[10px] mb-4 hover:bg-[#82513a] transition mt-40"
            >
              Sign Up As Tenant
            </button>

          
            <p className="text-center text-gray-500 font-medium my-2">OR</p>

           
            <button
              type="button"
              onClick={() => navigate("/landlordsignup")}
              className="w-full py-3 bg-[#F0D08C] text-white rounded-[10px] hover:bg-[#d8b770] transition"
            >
              Sign Up As Landlord
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
