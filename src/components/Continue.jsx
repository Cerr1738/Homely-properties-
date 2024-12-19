import React from 'react';
import amico from '../images/amico.png';
import arrow from '../images/arrow.png'

const Continue = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#966453] mb-9 px-4 w-[80%] m-auto py-10 rounded-[25px]">
      
      <div className="w-full max-w-lg p-6 bg-white rounded-[25px] flex flex-col items-center shadow-lg">
    
        <img
                  src={arrow}
                  alt="Go back"
                  className="cursor-pointer mb-6 "
                  onClick={() => navigate('/forget-password')}
                />
        <img src={amico} alt="Illustration" className="mb-5 w-32 sm:w-40 lg:w-48" />
        

        <h1 className="text-lg sm:text-xl lg:text-2xl mb-5 text-center font-semibold">
          Check your email and input the code provided to verify your address
        </h1>

        <div className="text-center mb-5">
          <p>Your email</p>
          <p className="font-semibold">example@gmail.com</p>
        </div>

        <form>
          <h2 className="mb-5 text-center text-xl sm:text-2xl">Input verification code</h2>

          <div className="flex justify-center gap-3 sm:gap-4 mb-10">
            <div className="border-4 border-[#966453] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[10px]"></div>
            <div className="border-4 border-[#966453] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[10px]"></div>
            <div className="border-4 border-[#966453] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[10px]"></div>
            <div className="border-4 border-[#966453] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[10px]"></div>
            <div className="border-4 border-[#966453] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-[10px]"></div>
          </div>

          <p className="text-center font-thin text-gray-500 leading-relaxed max-w-xs sm:max-w-md mb-5">
            Didn't receive any email? Please check your spam folder for it or try resending it by clicking the resend button below.
          </p>

          <button
            type="submit"
            className="w-full h-[50px] sm:w-3/4 lg:w-[300px] px-4 py-2 bg-[#966453] place-items-center  text-white rounded-md transition-transform transform hover:scale-105"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Continue;
