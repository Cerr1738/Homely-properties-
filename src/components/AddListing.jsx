import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import arrow from "../images/arrow.png";
import pic4 from "../images/pic4.png";
import Footer from "./Footer";

const AddListing = () => {
  const navigate = useNavigate();

  // States to store the selected file names
  const [photoFileName, setPhotoFileName] = useState("");
  const [videoFileName, setVideoFileName] = useState("");

  // Handlers to capture file changes
  const handlePhotoFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoFileName(file ? file.name : ""); // Set file name or reset
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFileName(file ? file.name : ""); // Set file name or reset
  };

  return (
    <div>
      <Header />
      <div className="bg-white min-h-screen ">
        <div className="items-center p-6">
          <div className="flex flex-row gap-[500px] ">
            <img
              src={arrow}
              alt=""
              className=" w-6 h-6"
              onClick={() => navigate("/landlords")}
            />
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Add Listings
            </h1>
          </div>
          <p className="text-gray-600 mb-8 text-center">
            Fill in the fields below to list your accommodation to tenants, and
            let them know all the details about the accommodation.
          </p>
        </div>
        <div className=" bg-gray-100 p-8 shadow-md rounded-md mb-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black font-medium mb-2 ">
                  Accommodation Name
                </label>
                <input
                  type="text"
                  placeholder="2 bedroom apartment"
                  className="w-full  p-3 bg-gray-100 rounded-md border border-black     focus:to-black"
                />
              </div>
              <div>
                <label className="block  text-black font-medium mb-2">
                  Accommodation Type
                </label>
                <select className="w-full  bg-gray-100 p-3 rounded-md border border-black focus:to-black">
                  <option>Bungalow</option>
                  <option>Apartment</option>
                  <option>Duplex</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-black font-medium mb-2">
                Accommodation Description
              </label>
              <textarea
                placeholder="Spacious 2-bedroom apartment with a sea view, fully furnished, located in a serene neighborhood"
                className="w-full bg-gray-100 p-3 rounded-md border border-black  "
                rows="12"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="₦500,000.00"
                  className="w-full border  border-black p-3 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Rent Type
                </label>
                <select className="w-full border  border-black p-3 rounded-md bg-gray-100">
                  <option>Yearly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 border border-orange-950"
                />{" "}
                Price Negotiable
              </label>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" /> Other fees included
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black font-medium mb-2">
                  State
                </label>
                <select className="w-full border  border-black p-3 rounded-md bg-gray-100">
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                </select>
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Ajao Estate, Lagos"
                  className="w-full border  border-black p-3 rounded-md bg-gray-100"
                />
              </div>
            </div>

            <div className="max-w-7xlpx-4 py-8 mb-[10px]">
              <img
                src={pic4}
                alt="Map Location"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black font-medium mb-2">
                Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-2 ">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Swimming pool
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Security
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Gym
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Parking space
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Furnished
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Power backup
                </label>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <label className=" text-black font-medium mb-2 flex gap-1">
                  Photo Upload <p className="text-red-600">*</p>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handlePhotoFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="w-full text-gray-700 border-2 p-4 rounded-md text-center">
                    <p className="text-black">{photoFileName || "Drag and drop or click to upload photos"}</p>
                    <p>{photoFileName || "Max size: 5MB per file. Supported formats: JPG, PNG"}</p>

                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className=" text-black font-medium flex gap-1 ">
                  Video Upload <p className="text-red-600">*</p>
                </label>
                <p className="mb-3">Do not upload more than 10mb</p>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleVideoFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="w-full text-gray-700 border-2 p-4 rounded-md text-center">
                    <p className="text-black">{videoFileName || "Drag and drop or click to upload photos"}</p>
                    <p>{videoFileName || "Max size: 5MB per file. Supported formats: JPG, PNG"}</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <label className="block text-black font-medium mb-2">
                Availability Status
              </label>
              <select className="w-full border border-black p-3 rounded-md bg-gray-100">
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="bg-gray-200 text-black px-6 py-3 rounded-md hover:bg-gray-300 border border-[#966453]"
              >
                Preview
              </button>
              <button
                type="submit"
                className="bg-[#966453] text-white px-6 py-3 rounded-md hover:bg-[#a36855]"
              >
                Submit Listing
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddListing;
