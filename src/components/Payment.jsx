import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import visa from "../images/visaCard.png";
import master from "../images/mastercard.png"

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white py-10">
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-8 mb-10 md:mr-[200px]">
          <button
            className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
            onClick={() => navigate("/subscription")}
          >
            Subscribe
          </button>
          <button
            className="text-lg font-medium focus focus:border focus:border-[#B89D63] focus:text-[#B89D63] focus:p-2 focus:rounded-xl"
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

        <div className="mx-20 ">
          <div className="flex flex-row justify-between mb-7">
            <h1 className="text-4xl font-bold text-[#503025]">Card Details</h1>
            <button className="bg-[#966453] text-white p-[10px]">
              Cancel Subscription
            </button>
          </div>

          <div className="flex flex-row justify-between ">

          <div className="flex flex-row border border-[#F0D08C] rounded-md w-[500px] p-5 items-center gap-6 justify-center mb-6">
            <img src={visa} className="w-16 h-16 mr-3" />

            <div>
              <p>xxxx xxx xxxx 3646</p>
              <p>Expiry.date 12/24</p>
              <select name="" id="" className="text-blue-600">
                <option value="">View details</option>
              </select>
            </div>

            <button className="mr-4 bg-[#F0D08C] text-black border border-[#966453] p-2 rounded-md">Default</button>
            <button className="bg-red-500 text-white p-2 rounded-md">Delete</button>
          </div>

          <div className="flex flex-row border border-[#F0D08C] rounded-md w-[500px] p-5 items-center gap-6 justify-center mb-5">
            <img src={master} className="w-16 h-16 mr-3" />

            <div>
              <p>xxx xxxx xxx 3646</p>
              <p>Expiry.date 12/24</p>
              <select name="" id="" className="text-blue-600">
                <option value="">View details</option>
              </select>
            </div>
            <button className="mr-3 bg-white border border-[#F0D08C] text-black p-2 rounded-md "> Set as Default</button>
            <button className="bg-red-500 text-white p-2 rounded-md">Delete</button>
          </div>
          </div>

          <div className="w-[500px] bg-[#FFC3AE1A] py-[70px] mb-10">
            <h2 className="text-center font-bold rounded-md"> + Add Card</h2>
          </div>
        </div>

        <div className="mx-20">
          <div className="flex flex-row justify-between mb-7">
            <div>
              <h1 className="text-4xl font-bold text-[#503025]">
                Add your card for payment
              </h1>
              <p className="font-bold">
                You can cancel your subscription at any time you like.
              </p>
            </div>

            <button className="bg-[#F0D08C] text-white py-[5px] px-[10px]">
              Change Plan
            </button>
          </div>

          <div className="mb-5">
            <h1 className="text-2xl font-bold mb-2">Payment Methods</h1>
            <div className="flex flex-row">
              <img src={master} className="w-15 h-7 mr-3" />
              <img src={visa} className="w-15 h-7 mr-3" />

            </div>
          </div>

          <form action="">
            <label htmlFor="" className="font-bold ">
              Card Number
            </label>
            <br />
            <input
              type="number"
              placeholder="8463 4399 3479 1234"
              className="border border-[#00000066] rounded-lg p-4 w-full mt-5 mb-5"
            />
            <div className="flex justify-between">
              <div className="grid ">
                <label htmlFor="" className="font-bold mb-2">
                  Expiry date
                </label>
                <input
                  type="text"
                  placeholder="1/30/7/24"
                  className="border border-[#00000066] rounded-lg p-4 w-[500px]"
                />
              </div>

              <div className="grid">
                <label htmlFor="" className="font-bold mb-2">
                  CVV
                </label>
                <input
                  type="number"
                  placeholder="Q11"
                  className="border border-[#00000066] rounded-lg p-4 w-[500px]"
                />
              </div>
            </div>
            <button className="bg-[#966453] p-3 text-white mt-6 ml-[500px] ">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;