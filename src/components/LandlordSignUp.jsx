import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API"; 

import Homely from "./Homely";
import AppleLogo from "../images/AppleLogo.png";
import GoogleLogo from "../images/GoogleLogo.png";
import arrow from "../images/arrow.png";
import NavBar from "./NavBar";

const LandlordSignUp = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     
      await API.post("/auth/register", formData);
      alert("Registration successful!");

    
      const loginResponse = await API.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", loginResponse.data.token);
      navigate("/landlords"); 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[60px]">
        <div className="max-w-[1060px] w-full h-auto p-6 flex flex-col lg:flex-row gap-8 bg-[#966453] items-center mx-[30px] mb-6 rounded-[40px]">
          <div className="flex-1">
            <Homely />
          </div>
          <div className="flex-1 max-w-md w-full bg-white rounded-[25px] p-6 shadow-md">
            <form className="flex flex-col" onSubmit={handleRegister}>
              <div className="mb-4">
                <img
                  src={arrow}
                  alt="Back to Login"
                  className="cursor-pointer w-6"
                  onClick={() => navigate("/login")}
                />
              </div>
              <h1 className="text-center text-2xl font-bold mb-2">Create Account</h1>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <p className="text-left text-sm mb-6">
                Enter details below to create your real property account:
              </p>
              <input
                type="text"
                name="name"
                placeholder="Fullname"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
              />
              <div className="relative flex items-center border border-gray-400 p-3 rounded-md mb-6 cursor-pointer hover:bg-gray-100">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <p className="w-full text-gray-700">{fileName || "Upload ID"}</p>
              </div>
              <button
                type="submit"
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
    </div>
  );
};

export default LandlordSignUp;