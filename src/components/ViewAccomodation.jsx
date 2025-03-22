import React from "react";
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import pic3 from "../images/pic3.jpeg";
import video1 from "../images/video1.mp4";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.jpeg";
import pic6 from "../images/pic6.jpeg";
import Find from "./Find";
import vector3 from "../images/Vector3.png";
import vector4 from "../images/Vector4.png";
import vector5 from "../images/Vector5.png";
import vector6 from "../images/Vector6.png";
import vector7 from "../images/Vector7.png";
import vector8 from "../images/Vector8.png";
import vector9 from "../images/Vector9.png";
import vector10 from "../images/Vector10.png";
import Footer from "./Footer";
import arrow from "../images/arrow.png";
import Heart from "../images/Heart.png";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const ViewAccommodation = () => {
  const navigate = useNavigate();

  const fadeInRight = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const fadeInRight2 = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const fadeInRight3 = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9,
        duration: 0.6,
      },
    },
  };
  const fadeInRight4 = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.7,
      },
    },
  };

  const fadeInTop = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.1,
        duration: 0.5,
      },
    },
  };

  const fadeInBottom1 = { 
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  const fadeInBottom2 = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.1, 
        duration: 0.5,
      },
    },
  };

  const fadeInBottom3 = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2, 
        duration: 0.5,
      },
    },
  };

  const fadeInBottom4 = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3, 
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <NavBar />

      <div className="bg-white text-gray-900">
        <div className="max-w-6xl mx-[100px] px-4 py-8">
          <div className=" flex flex-row  mb-10 justify-between ">
            <motion.img
              src={arrow}
              alt=""
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              className="gap-10 w-[30px] h-[30px]"
              onClick={() => navigate("/landlords")}
            />
            <motion.h2
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              className="text-center text-amber-950 font-bold text-2xl"
            >
              Accomodation Details
            </motion.h2>
            <motion.img
              src={Heart}
              alt=""
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              className="w-[30px] h-[30px]"
            />
          </div>

          <motion.h2
            variants={fadeInRight2}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-bold mb-4"
          >
            Wisdom Lodge, Port-Harcourt, Rivers State
          </motion.h2>

          <div className=" grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              variants={fadeInTop}
              initial="initial"
              whileInView="animate"
              className="relative col-span-3 md:col-span-3 h-[300px]"
            >
              <video className="w-full h-full object-cover rounded-lg">
                <source src={video1} type="video/mp4" alt="Living Room" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white font-semibold text-xl">
                Take a Tour
              </div>
            </motion.div>

            <div className="md:flex grid gap-4 mt-4 items-center">
              <div className="rounded-lg overflow-hidden">
                <motion.img
                  variants={fadeInRight2}
                  initial="initial"
                  whileInView="animate"
                 
                  src={pic1}
                  alt="Living Room"
                  className="w-[700px] h-[500px] object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <motion.img
                variants={fadeInRight3}
                initial="initial"
                whileInView="animate"
                  src={pic2}
                  alt="Bedroom"
                  className="w-[700px] h-[500px] object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <motion.img
                variants={fadeInRight4}
                initial="initial"
                whileInView="animate"
                  src={pic3}
                  alt="Kitchen"
                  className="w-[700px] h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-[80px] px-8 py-8 bg-white rounded-md mb-[80px]">
          <motion.h3 
          variants={fadeInBottom1}
          initial="initial"
          whileInView="animate"
          className="text-xl font-semibold mb-5">3 bedroom apartment</motion.h3>
          <div className="flex flex-col gap-8">
            <div className="text-left ">
              <motion.p 
               variants={fadeInBottom2}
               initial="initial"
               whileInView="animate"
              className="text-3xl text-[#503025] font-semibold mb-5">
                ₦500,000.00/yr
              </motion.p>
              <motion.button 
                variants={fadeInBottom3}
                initial="initial"
                whileInView="animate"

              className="bg-[#966453] text-white py-2 px-4 rounded items-center">
                Contact Agent
              </motion.button>
            </div>

            <motion.div 
             variants={fadeInBottom4}
             initial="initial"
             whileInView="animate"

            className="">
              <p className="text-[#503025] font-bold">Description</p>
              <p className="text-[#1B1B1B] leading-relaxed w-[300px] md:w-[1000px] ">
                Our hostel accommodation provides a conducive environment for
                students to focus on their studies while enjoying a balanced
                social life. Each room is equipped with study desks, ample
                storage space, and comfortable beds to ensure a restful stay.
                Our communal kitchens are fully equipped, encouraging students
                to prepare meals together and share culinary experiences.
                Regular events and activities are organized to foster a sense of
                community, making our hostel more than just a place to live.
                it's a home away from home where students can grow academically
                and personally
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center mt-6">
            <motion.div
              variants={fadeInRight2}
              initial="initial"
              whileInView="animate"
             
            >
              <p className="font-medium  mb-5">Building Facilities:</p>
              <ul className="list-none list-inside grid grid-cols-2 gap-6">
                <div className="flex flex-row  gap-3">
                  <img src={vector3} alt="" className="w-[20px] h-[20px] " />{" "}
                  <li>Swimming Pool</li>
                </div>
                <div className="flex flex-row gap-3">
                  <img src={vector5} alt="" className="w-[20px] h-[20px] " />
                  <li>Borehole</li>
                </div>
                <div className="flex flex-row gap-3">
                  <img src={vector6} alt="" className="w-[20px] h-[20px] " />{" "}
                  <li>Electricity</li>
                </div>
                <div className="flex flex-row gap-3">
                  <img src={vector4} alt="" className="w-[20px] h-[20px] " />{" "}
                  <li>Movie Room</li>
                </div>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInRight3}
              initial="initial"
              whileInView="animate"
             
            >
              <p className="font-medium mb-5">Apartment Facilities:</p>
              <ul className=" list-inside list-none grid grid-cols-2 gap-6">
                <div className="flex flex-row  gap-3">
                  <img src={vector7} alt="" className="w-[20px] h-[20px]" />{" "}
                  <li>4 Bedroom</li>
                </div>
                <div className="flex flex-row  gap-3">
                  <img src={vector9} alt="" className="w-[20px] h-[20px]" />{" "}
                  <li>Smart Home System</li>
                </div>
                <div className="flex flex-row  gap-3">
                  <img src={vector10} alt="" className="w-[20px] h-[20px]" />{" "}
                  <li>Modern Bathroom</li>
                </div>
                <div className="flex flex-row  gap-3">
                  <img src={vector8} alt="" className="w-[20px] h-[20px]" />{" "}
                  <li>Kitchen</li>
                </div>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInRight4}
              initial="initial"
              whileInView="animate"
             
            className="p-4 bg-gray-50 rounded-lg shadow-md w-80">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-[#503025] font-medium">
                    Safety Rating
                  </span>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 text-lg">&#9733;</span>
                    <span className="text-black text-lg">&#9733;</span>
                    <span className="text-black text-lg">&#9733;</span>
                    <span className="text-black text-lg">&#9734;</span>
                    <span className="text-black text-lg">&#9734;</span>
                  </div>
                </div>
                <span className="text-[#503025] text-xl">
                  4.5 <span className="text-[#503025]">(400 reviews)</span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#503025] font-medium">
                    Facility Rating
                  </span>
                  <div className="flex items-center mt-1">
                    <span className="text-black text-lg">&#9733;</span>
                    <span className="text-black text-lg">&#9733;</span>
                    <span className="text-black text-lg">&#9733;</span>
                    <span className="text-gray-400 text-lg">&#9734;</span>
                    <span className="text-gray-400 text-lg">&#9734;</span>
                  </div>
                </div>
                <span className="text-[#503025] text-xl">
                  3.5 <span className="text-[#503025]">(350 reviews)</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-[80px] px-4 py-8 mb-[100px]">
          <motion.h3 
          variants={fadeInBottom1}
          initial="initial"
          whileInView="animate"
          className="text-2xl font-bold mb-4">Location</motion.h3>
          <motion.img
           variants={fadeInBottom2}
           initial="initial"
           whileInView="animate"
            src={pic4}
            alt="Map Location"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="max-w-7xl mx-[80px] px-4 py-8 mb-[100px]">
          <motion.h3   
          variants={fadeInBottom1}
          initial="initial"
          whileInView="animate"
          className="text-2xl font-bold mb-4">Similar Listings</motion.h3>
          <motion.div 
           variants={fadeInRight2}
           initial="initial"
           whileInView="animate"
          className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-md shadow-md p-4">
                <img
                 
                  src={pic5}
                  alt="Hosana Lodge"
                  className="w-full h-32 object-cover rounded-md"
                />
                <h4 className="text-lg font-semibold mt-2">Hosana Lodge</h4>
                <p className="text-gray-700">₦95,000/yr</p>
                <p className="text-gray-500 text-sm">Lagos | 1 Bedroom</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">⭐</span>
                  <p className="ml-1">4.5</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <Find />
        <Footer />
      </div>
    </div>
  );
};

export default ViewAccommodation;
