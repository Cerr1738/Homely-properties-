import React from "react";
import hero from "../images/Hero.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();

  const fadeInBottom1 = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
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
        delay: 0.7,
        duration: 0.5,
      },
    },
  };


  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="relative text-center space-y-6 px-4">
        <motion.h1 
        variants={fadeInBottom1}
        initial="initial"
        whileInView="animate"
        className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Showcase Your Homes with
          <div>Homely Properties</div>
        </motion.h1>
        <motion.button
        variants={fadeInBottom2}
        initial="initial"
        whileInView="animate"
          className="bg-[#E6C98F] hover:bg-[#D4B87E] text-black px-6 py-2 rounded"
          onClick={() => navigate("/add-listing")}
        >
          Add listing
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
