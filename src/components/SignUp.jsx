import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API"; // Import API setup
import Homely from "./Homely";
import AppleLogo from "../images/AppleLogo.png";
import GoogleLogo from "../images/GoogleLogo.png";
import arrow from "../images/arrow.png";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/landlords");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };
  
  const popInanimate = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };


  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[60px]">
        <div className="max-w-[1060px] w-full h-auto p-6 flex flex-col lg:flex-row gap-8 bg-[#966453] items-center mx-[30px] mb-6 rounded-[40px]">
          <div className="cont-one flex-shrink-0 w-full lg:w-1/2">
            <Homely />
          </div>

          <motion.div 
          variants={popInanimate}
          initial= "initial"
          whileInView="animate"
          className="cont-two w-full lg:w-[460px] p-6 bg-white rounded-[25px] flex flex-col items-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-6">
                <img
                  src={arrow}
                  alt="Back arrow"
                  className="cursor-pointer mb-4"
                  onClick={() => navigate("/login")}
                />
                <h2 className="text-center text-2xl font-semibold">Sign In</h2>
                <p className="text-left text-sm mb-4">
                  Sign in to your real property account:
                </p>
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-[10px] rounded-[5px] border-[1px] border-gray-400 mb-4 w-full"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="p-[10px] rounded-[5px] border-[1px] border-gray-400 mb-4 w-full"
              />

              <p
                className="text-sm cursor-pointer text-center mb-4 text-blue-600"
                onClick={() => navigate("/forget-password")}
              >
                Forgot password?
              </p>

              <button
                type="submit"
                className="w-full h-[50px] bg-[#966453] text-white font-medium rounded-[5px] mb-4"
              >
                Sign In
              </button>

              <div className="logo-sign mt-4 text-center">
                <h3 className="text-lg">Sign In with</h3>
                <div className="logos flex gap-4 justify-center mt-2">
                  <img
                    src={AppleLogo}
                    alt="Apple Logo"
                    className="w-[40px] cursor-pointer"
                  />
                  <img
                    src={GoogleLogo}
                    alt="Google Logo"
                    className="w-[40px] cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
