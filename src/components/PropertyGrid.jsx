import React from 'react';
import property from '../images/house1.jpeg';
import { motion } from 'framer-motion';

const properties = Array(6).fill({
  title: "4 bedroom apartment",
  location: "GRA, Port Harcourt Rivers state",
  price: "₦500,000.00/yr",
  totalFees: "₦700,000.00",
  status: "Available",
  image: property,
});

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


function PropertyGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 ">
        <motion.h2 
        variants={fadeInRight}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold mb-8 ml-[80px] text-start text-[#503025]">Property Listing overview</motion.h2>
        <motion.div 
         variants={fadeInTop}
         initial="initial"
         whileInView="animate"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[80px]">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <div className="mt-2">
                  <div className="font-bold">{property.price}</div>
                  <div className="text-sm">Total fees = {property.totalFees}</div>
                  <div className="text-sm text-gray-600">{property.status}</div>
                </div>
              </div>
              <div className="flex gap-2 p-4 border-t">
                <button 
                  className=" bg-[pink] text-white py-2 px-4 w-[100px] mr-5 rounded hover:bg-red-600"
                  onClick={() => console.log('Delete clicked')}
                >
                 &#128465;
                </button>
                <button 
                  className="flex-1 bg-[#8B5E34] text-white py-2 px-4 rounded hover:bg-[#704B2A]"
                  onClick={() => console.log('Edit listing clicked')}
                >
                  Edit listing
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PropertyGrid;

