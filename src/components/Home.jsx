import React from "react";
import house1 from "../images/house1.jpeg";
import hand from "../images/hand.png";
import house3 from "../images/house3.jpeg";
import whiteman from "../images/whiteman.png";
import youngman from "../images/youngman.png";
import nigerian from "../images/nigerian.jpeg";
import Stats from "./Stats";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import money from "../images/money.png";
import location from "../images/location.png";
import search from "../images/search.png";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();

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

  const fadeInTop = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate:{
      opacity: 1,
      y:0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },

  }

  const fadeInRight = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate:{
      opacity: 1,
      x:0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },

  }



  return (
    <div>
      <NavBar />
      <div className="font-sans ">
        <section className="bg-[#F4F4F4]">
          <div className="container mx-auto  flex flex-col lg:flex-row  items-center p-6 lg:p-16 max-w-full">
            <motion.div
              variants={popInanimate}
              initial="initial"
              whileInView="animate"
              className="flex-1 text-center lg:text-left mb-8 lg:mb-0"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                Discover Your Dream <br /> Home By Us
              </h1>
              <div className="border-l-2 border-l-black pl-4 mx-auto lg:mx-0 max-w-xs lg:max-w-sm">
                <p className="text-black mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit. Sed
                  eget commodo enim. Distinct ultrices semper turpis dictum.
                </p>
              </div>
              <button
                className="bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#723A11] transition"
                onClick={() => navigate("/view-accommodations")}
              >
                View Property
              </button>
            </motion.div>

            <motion.div 
             variants={popInanimate}
             initial="initial"
             whileInView="animate"
            className="flex-1">
              <img
                src={house1}
                alt="Hero Home"
                className="rounded-lg w-[500px] max-w-md ml-16 lg:max-w-lg h-[500px]"
              />
            </motion.div>
          </div>
        </section>

        <motion.section 
          variants={fadeInTop}
          initial="initial"
          whileInView="animate"

        className="bg-white py-10">
          <div className="container mx-auto p-8 rounded-lg border shadow-2xl max-w-full sm:w-[600px]">
            <h2 className="text-center text-xl font-semibold mb-4">
              Search Available Houses
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={location} alt="Location Icon" className="w-7 h-7" />
                <p className="text-sm font-medium">Location</p>
              </div>

              <select className="border border-gray-300 rounded-md text-sm p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Apartment Type</option>
                <option>House</option>
                <option>Flat</option>
              </select>

              <div className="flex items-center gap-2">
                <img src={money} alt="Price Range Icon" className="w-7 h-7" />
                <p className="text-sm font-medium">Price Range</p>
              </div>

              <p className="text-sm font-medium">Rent</p>

              <button className=" text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition-all">
                <img src={search} alt="Search Icon" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.section>

        <section className="bg-gray-50 py-10 mx-4 md:mx-[120px]">
          <div className="container mx-auto p-6">
            <motion.h2 
            variants={fadeInTop}
            initial="initial"
            whileInView="animate"

            className="text-2xl font-bold text-center mb-8">
              Our Popular Homes
            </motion.h2>

            <motion.div 
             variants={fadeInTop}
             initial="initial"
             whileInView="animate"

            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[house1, nigerian, house3].map((image, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg max-w-full"
                >
                  <img
                    src={image}
                    alt={`House ${index + 1}`}
                    className="rounded-md mb-4 w-full h-[250px] object-cover"
                  />
                  <h3 className="text-lg font-semibold">
                    GRA, Port-Harcourt, Rivers State
                  </h3>
                  <p>4 Bedrooms | Swimming pool | Garden</p>
                  <p className="text-gray-500 mt-2">Available</p>
                  <p className="font-bold mt-2">₦ 500,000.00/yr</p>
                  <button
                    className="mt-4 bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#723A11]"
                    onClick={() => navigate("/view-accommodations")}
                  >
                    View Accommodation
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-10 px-4 lg:px-6">
          <div className="container mx-auto p-6">
            <motion.h2 
            variants={fadeInTop}
            initial="initial"
            whileInView="animate"

            className="text-3xl font-bold text-center mb-10">
              Easy Steps To Secure An Apartment With Homely
            </motion.h2>


            <motion.div 
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            className="flex flex-col gap-12">
              {[youngman, whiteman, hand].map((image, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-6 `}
                >
                  <img
                    src={image}
                    alt={`Step ${index + 1}`}
                    className="w-64 h-64 rounded-lg object-cover bg-[#93694a]"
                  />
                  <div>
                    <span className="bg-[#FFE9BA] text-black p-3 rounded-full font-bold">
                      Step {index + 1}
                    </span>
                    <h3 className="text-3xl font-bold mt-2">
                      {index === 0
                        ? "Search for a suitable apartment"
                        : index === 1
                        ? "Select a Suitable Apartment"
                        : "Contact landlord"}
                    </h3>
                    <p className="text-black mt-2 text-xl max-w-md">
                      {index === 0
                        ? "Sign up to create your profile and start searching for the perfect apartment."
                        : index === 1
                        ? "Choose your ideal apartment from our listings, considering factors like location and price."
                        : "Reach out to landlords to schedule viewings and complete your payment process."}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
            <FAQ />
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
