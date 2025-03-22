import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-8 mb-10 md:mr-[200px]">
            <button
              className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
              onClick={() => navigate("/subscription")}
            >
              Subscribe
            </button>
            <button className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
            onClick={() => navigate("/payment")}
            >
              Payment
            </button>
            <button className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
             onClick={() => navigate("/payment-history")}
             >
              Payment history
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-[#503025]">
              Choose Your Subscription Plan
            </h1>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={togglePlan}
              className={`p-4 border rounded-l-md mb-2 ${
                !isYearly
                  ? "bg-[#B89D63] text-white"
                  : "bg-[#ebced3] text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={togglePlan}
              className={`p-4 border rounded-r-md mb-2 ${
                isYearly
                  ? "bg-[#B89D63] text-white"
                  : "bg-[#ebced3] text-gray-700"
              }`}
            >
              Yearly <span className="ml-1 text-white text-sm rounded bg-[green] p-2">(Save 20%)</span>
            </button>
          </div>

          <p className="text-gray-500 text-xl text-center">
            Best Plans For {" "}
            <span className="font-semibold text-[#503025]">Homely Properties</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4 md:mx-[80px] text-center">
            <div className="border p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-2xl font-semibold mb-2 border border-[#503025] text-[#503025] p-3 rounded-lg">
                Basic Plan
              </h3>
              <p className="text-4xl font-bold text-[#503025]">
                ₦{isYearly ? 2500 * 12 * 0.8 : 2500}
              </p>
              <p className="text-sm text-gray-500">5 Properties allowed</p>
              <ul className="mt-4 space-y-2 text-gray-600 text-start mb-[70px]">
                <li>&#10004; Basic property listing</li>
                <li>✔ Standard visibility</li>
                <li>✔ Limited analytics</li>
                <li>&#x274C; <s>Comprehensive analytics</s></li>
                <li>&#x274C; <s>Priority customer support</s></li>
              </ul>
              <button className="mt-6 w-full bg-[#966453] text-white py-2 rounded-md">
                Choose Plan
              </button>
            </div>

            <div className="border p-6 rounded-lg shadow-md bg-[#503025] text-white">
              <h3 className="text-2xl font-semibold mb-2 border border-white p-3 rounded-md">
                Premium Plan
              </h3>
              <p className="text-4xl font-bold">
                ₦{isYearly ? 3500 * 12 * 0.8 : 3500}
              </p>
              <p className="text-sm">20 Properties allowed</p>
              <ul className="mt-4 space-y-2 text-start mb-[50px]">
                <li>✔ Advanced property listing</li>
                <li>✔ Standard visibility</li>
                <li>✔ Limited analytics</li>
                <li>✔ Comprehensive analytics</li>
                <li>✔ Priority customer support</li>
                <li>&#x274C; <s>App management</s></li>
              </ul>
              <button className="mt-6 w-full bg-[#F0D08C] text-brown-700 py-2 rounded-md">
                Choose Plan
              </button>
            </div>

            <div className="border p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-2xl font-bold mb-2 border border-[#503025] text-[#503025] text-center p-3 rounded-md">
                Enterprise Plan
              </h3>
              <p className="text-4xl font-bold">
                ₦{isYearly ? 5500 * 12 * 0.8 : 5500}
              </p>
              <p className="text-sm text-gray-500">Unlimited properties</p>
              <ul className="mt-4 space-y-2 text-gray-600 text-start mb-[70px]">
                <li>✔ Premium property listing</li>
                <li>✔ Top-tier visibility</li>
                <li>✔ Advanced analytics</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Custom reporting</li>
              </ul>
              <button className="mt-6 w-full bg-[#966453] text-white py-2 rounded-md">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Subscription;
