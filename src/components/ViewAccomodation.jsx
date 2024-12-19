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
import arrow from '../images/arrow.png'
import Heart from '../images/Heart.png'
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";



const ViewAccommodation = () => {
     const navigate = useNavigate();
  

  return (
    <div>
      <NavBar />
    
    <div className="bg-gray-50 text-gray-900">
      
      <div className="max-w-6xl m-auto px-4 py-8">
        <div className=" flex flex-row  mb-10 justify-between">
          <img src={arrow} alt=""  className="gap-10" onClick={() => navigate("/")}/>
          <h2 className="text-center text-amber-950 text-2xl">Property Details</h2>
          <img src={Heart} alt="" />
        </div>
        <h2 className="text-3xl font-bold mb-4">3 Bedroom Apartment</h2>

        <div className=" grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative col-span-3 md:col-span-3 h-[300px]">
            <video className="w-full h-full object-cover rounded-lg" controls>
              <source src={video1} type="video/mp4" alt="Living Room" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white font-semibold text-xl">
              Take a Tour
            </div>
          </div>

          <div className="flex gap-4 mt-4 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={pic1}
                alt="Living Room"
                className="w-[700px] h-[500px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={pic2}
                alt="Bedroom"
                className="w-[700px] h-[500px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={pic3}
                alt="Kitchen"
                className="w-[700px] h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 bg-white shadow-lg rounded-md mb-[100px]">
        <h3 className="text-2xl font-semibold">
          Wisdom Lodge, Port-Harcourt, Rivers State
        </h3>
        <div className="flex flex-row gap-8">
          <p className="text-gray-700 mt-2 leading-relaxed w-[1000px]">
            Our hostel accommodation provides a conducive environment for
            students to focus on their studies while enjoying a balanced social
            life. Each room is equipped with study desks, ample storage space,
            and comfortable beds to ensure a restful stay. Our communal kitchens
            are fully equipped, encouraging students to prepare meals together
            and share culinary experiences.
          </p>

          <div className="text-left ">
            <p className="font-bold text-lg">Apartment Price</p>
            <p className="text-3xl text-black font-semibold ">₦500,000/yr</p>
            <button className="bg-[#966453] text-white py-2 px-4 rounded mt-2">
              Contact Agent
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 items-center mt-6">
          <div>
            <p className="font-medium  mb-5">Building Facilities:</p>
            <ul className="list-none list-inside grid grid-cols-2 gap-8">
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
          </div>
          <div>
            <p className="font-medium mb-5">Apartment Facilities:</p>
            <ul className=" list-inside list-none grid grid-cols-2 gap-8">
              <div className="flex flex-row  gap-3">
                <img src={vector7} alt="" /> <li>4 Bedroom</li>
              </div>
              <div className="flex flex-row  gap-3">
                <img src={vector9} alt="" /> <li>Smart Home System</li>
              </div>
              <div className="flex flex-row  gap-3">
                <img src={vector10} alt="" /> <li>Modern Bathroom</li>
              </div>
              <div className="flex flex-row  gap-3">
                <img src={vector8} alt="" /> <li>Kitchen</li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mb-[100px]">
        <h3 className="text-2xl font-bold mb-4">Location</h3>
        <img
          src={pic4}
          alt="Map Location"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mb-[100px]">
        <h3 className="text-2xl font-bold mb-4">Similar Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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
        </div>
      </div>
      <Find />
      <Footer />
    </div>
    </div>
  );
};

export default ViewAccommodation;
