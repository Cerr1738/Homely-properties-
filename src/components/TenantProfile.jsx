import React, { useState } from "react";

import Footer from "./Footer";
import john from "../images/johndoe.png";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavBar2 from "./NavBar2";

const TenantProfile = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    notifications: true,
    email: false,
    push: false,
    updates: false,
    payment: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar2 />
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white">
        <button className="text-gray-500 text-xl mb-4 flex items-center">
          <FaArrowLeft className="mr-2" />
        </button>

        <h1 className="text-center text-2xl font-bold text-[#6D4C41]">Profile Overview</h1>
        <div className="flex flex-col items-center mt-6">
          <img src={john} alt="Profile" className="w-24 h-24 rounded-full border-4 border-gray-300" />
          <h2 className="text-xl font-semibold mt-2">Jane Doe</h2>
          <h3 className="text-gray-600">Tenant</h3>
          <button className="mt-3 px-4 py-2 bg-[#6D4C41] text-white rounded-lg" 
          onClick={() => navigate("/edit-profile")}
          >
            Edit Profile</button>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="grid gap-2">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p>Email Address: Janeydavey@gmail.com</p>
            <p>Phone Number: Nil</p>
            <p>WhatsApp Number: Nil</p>
            <p>Address: Nigeria</p>
          </div>
          <div className="grid gap-4 mt-3">
            <button className="px-2 py-1 bg-[#F0D08C] text-black rounded">Update</button>
            <button className="px-3 py-1 bg-[#F0D08C] text-black rounded">Update</button>
            <button className="px-3 py-1 bg-[#F0D08C] text-black rounded">Update</button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Account Settings</h2>

          <div className="flex justify-between items-center mt-2">
            <p>Change Password</p>
            <button className="px-3 py-1 bg-[#F0D08C] text-black rounded">Change</button>
          </div>

          <div className="flex justify-between items-center mt-2 gap-4">
            <p>Manage Notifications</p>
            <div
              className={`w-14 h-7 flex items-center rounded-full p-1 py-2 cursor-pointer transition-all duration-300 ${
                settings.notifications ? "bg-[#B89D63]" : "bg-gray-300 border border-[#B89D63]"
              }`}
              onClick={() => toggleSetting("notifications")}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  settings.notifications ? "translate-x-6 bg-white" : "bg-gray-500"
                }`}
              >
                {settings.notifications ? "✔" : "✖"}
              </div>
            </div>
          </div>

          {["email", "push", "updates", "payment"].map((key) => (
            <div key={key} className="flex justify-between items-center mt-2">
              <p>{key.replace(/^\w/, (c) => c.toUpperCase())} Notifications</p>
              <div
                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  settings[key] ? "bg-[#B89D63]" : "bg-gray-300 border border-[#B89D63]"
                }`}
                onClick={() => toggleSetting(key)}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    settings[key] ? "translate-x-6 bg-white" : "bg-gray-500"
                  }`}
                >
                  {settings[key] ? "✔" : "✖"}
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center mt-6">
          <button className="flex items-center px-8 py-3 bg-red-300 text-white rounded-lg">
            <FaTrash />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TenantProfile;
