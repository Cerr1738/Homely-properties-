import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import john from "../images/johndoe.png";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

     const navigate = useNavigate();

     const handleClick = () => {
        navigate("/landlord-profile"); 
        alert("Profile successfully updated!"); 
        
      };
    
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white">
            <button className="text-gray-500 text-xl mb-4 flex items-center">
            <FaArrowLeft className="mr-2" />
            </button>

            <h1 className="text-center text-2xl font-bold text-[#6D4C41]">
            Profile Overview
            </h1>
            <div className="flex flex-col items-center mt-6">
            <img
                src={john}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-300"
            />
            <h2 className="text-xl font-semibold mt-2">Jane Doe</h2>
            <h3 className="text-gray-600">Landlord</h3>
            </div>

            <div className="">
                <form action=""  className="grid grid-cols-1 gap-3 mb-8">
                    <label htmlFor="">Full name</label>
                    <input type="text" value="John Doe" className=" border border-[#8D8D8D] p-3 rounded-lg font-bold text-black"/>

                    <label htmlFor="">Email Address</label>
                    <input type="email" value="janneydovey@gamil.com" className=" border border-[#8D8D8D] p-3 rounded-lg font-bold text-black"/>

                    <label htmlFor="">Phone Number</label>
                    <input type="number" value="0000000000" className=" border border-[#8D8D8D] p-3 rounded-lg font-bold text-black"/>

                    <label htmlFor="">WhatsApp Number</label>
                    <input type="number" placeholder="12346000490" className=" border border-[#8D8D8D] p-3 rounded-lg font-bold text-black"/>

                    <label htmlFor="">House Address</label>
                    <input type="text" value="No. 15. Ajao estate. Lagos" className=" border border-[#8D8D8D] p-3 rounded-lg font-bold text-black"/>

                  
                </form>
                <button className="bg-[#966453] p-5 text-white justify-center ml-[350px] rounded-lg" 
                onClick={handleClick}
               
              
                >Update Profile</button>
            </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditProfile;
