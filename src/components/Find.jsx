import React from 'react';
import { useNavigate } from "react-router-dom";

function Find() {
   const navigate = useNavigate();

  return (
    <section className="bg-[#503025] py-16 mb-[10px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Find Accomodation Like Never before
          </h2>
          <div className="space-y-6">
            <p className="text-white/90">
              Lorem ipsum dolor sit amet consectetur. Lorem pulvinar eu egestas id ultricies a phasellus senectus. Mauris velit adipiscing morbi in at cras ultricies lacus. Ultrices faucibus sapien augue enim dui vulputate. Est nibh commodo justo nec consectetur.
            </p>
            <button 
              className="w-full md:w-auto bg-[#E6C98F] hover:bg-[#D4B87E] text-black px-8 py-3 rounded"
              onClick={() => navigate("/login")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Find;