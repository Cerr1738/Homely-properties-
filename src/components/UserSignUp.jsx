import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API"; 
import Homely from "./Homely";
import AppleLogo from "../images/AppleLogo.png";
import GoogleLogo from "../images/GoogleLogo.png";
import arrow from "../images/arrow.png";
import NavBar from "./NavBar";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/register", formData); 
      setSuccess("Account created successfully!");
      localStorage.setItem("token", response.data.token); 
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
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
            <form className="flex flex-col" onSubmit={handleSubmit}>
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

              {/* Show Error or Success Messages */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

              {/* Form Inputs */}
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Fullname"
                required
                className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-3 rounded-md border border-gray-400 mb-4 w-full focus:ring-2 focus:ring-[#966453]"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="p-3 rounded-md border border-gray-400 mb-6 w-full focus:ring-2 focus:ring-[#966453]"
              />

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

export default UserSignUp;
