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

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans">
      <NavBar/>
      
      <section className="bg-[#F4F4F4]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-6 lg:p-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Discover Your Dream <br /> Home By Us
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipiscing elit. Sed eget
              commodo enim. Distinct ultrices semper turpis dictum.
            </p>
            <button
              className="bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#723A11] transition"
              onClick={() => navigate("/view-accommodations")}
            >
              View Property
            </button>
          </div>

          <div className="flex-1">
            <img
              src={house1}
              alt="Hero Home"
              className="rounded-lg w-[500px] h-[450px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto p-6 rounded-lg shadow-md">
          <h2 className="text-center text-xl font-semibold mb-4">
            Search Available Houses
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <input
              type="text"
              placeholder="Location"
              className="border px-4 py-2 rounded w-full lg:w-auto"
            />
            <select className="border px-4 py-2 rounded w-full lg:w-auto">
              <option>Apartment Type</option>
              <option>House</option>
              <option>Flat</option>
            </select>
            <input
              type="text"
              placeholder="Price Range"
              className="border px-4 py-2 rounded w-full lg:w-auto"
            />
            <button className="bg-[#8B4513] text-white px-6 py-2 rounded hover:bg-[#723A11]">
              Search
            </button>
          </div>
        </div>
        <Stats />
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Our Popular Homes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={house1}
                alt="House 1"
                className="rounded-md mb-4 w-[400px] h-[350px]"
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

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={nigerian}
                alt="House 2"
                className="rounded-md mb-4  w-[400px] h-[350px]"
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

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src={house3} alt="House 3" className="rounded-md mb-4 " />
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
          </div>
        </div>
      </section>

      <section className="bg-white py-10 ml-6 ">
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Easy Steps To Secure An Apartment With Homely
          </h2>
          <div className="flex flex-col gap-12 m ">
            <div className="flex flex-col lg:flex-row items-center gap-6 ">
              <img
                src={youngman}
                alt="Step 1"
                className="w-64 h-64 rounded-lg bg-[#93694a]"
              />
              <div >
                <span className="bg-[#FFE9BA] text-black p-3 rounded-full font-bold items-center">
                  Step 1
                </span>
                <h3 className="text-3xl font-bold mt-2 ">
                  Search for a suitable apartment
                </h3>
                <p className="text-gray-600 mt-2 text-2xl">
                  Sign up to create your profile and start searching for the
                  perfect apartment. Explore our accommodation listings to find
                  a match that suits your needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
              <img
                src={whiteman}
                alt="Step 2"
                className="w-64 h-64 rounded-lg bg-[#4c2c15]"
              />
              <div>
                <span className="bg-[#FFE9BA] text-black  p-3  rounded-full font-bold">
                  Step 2
                </span>
                <h3 className="text-3xl font-bold mt-2 w-[450px]">
                  Select a Suitable Apartment of Your Choice
                </h3>
                <p className="text-gray-600 mt-2 text-2xl">
                  Choose your ideal apartment from our listings, considering
                  factors like location, apartment type, and price range.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              <img
                src={hand}
                alt="Step 3"
                className="w-64 h-64 rounded-lg bg-[#93694a]"
              />
              <div>
                <span className="bg-[#FFE9BA] text-black p-3  rounded-full font-bold">
                  Step 3
                </span>
                <h3 className="text-3xl font-bold mt-2">Contact Agent</h3>
                <p className="text-gray-600 mt-2 text-2xl">
                  Reach out to agents to schedule property viewings and complete
                  your payment process.
                </p>
              </div>
            </div>
          </div>
          <FAQ />
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
