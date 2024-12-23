import React from "react";
import image1 from "../images/image1.png";
import NavBar from "./NavBar";

const Homely = () => {
  return (
    <div> 
   
    
    <div className="flex flex-col items-center justify-center p-4">
      

      <div className="text-center w-full max-w-[300px] lg:max-w-none mb-6">
        <h1 className="text-lg lg:text-2xl font-semibold text-white">Welcome To</h1>
        <h1 className="text-xl lg:text-3xl font-extrabold text-white mt-2">
          Homely Properties
        </h1>
      </div>

      <img
        src={image1}
        alt="Homely Property"
        className="w-full max-w-[200px] lg:max-w-[600px] h-auto rounded-[30px]  shadow-lg"
      />
      </div>
    </div>
  );
};

export default Homely;
