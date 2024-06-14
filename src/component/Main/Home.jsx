import React from "react";
import Coins from "../Dashboard/get-detail";
import "./style.css";

export default function Home() {
  return (
    <div className="max-w-full bg-[url('/src/assets/crypto-phone.jpg')] md:bg-[url('/src/assets/crypto_web.jpg')] bg-center md:bg-[top] bg-cover min-h-screen flex flex-col items-center md:items-start justify-start">
      <div className="w-full">
        <div className="xs:mt-10 mt-24 md:text-start text-white text-stroke w-fit m-auto md:mt-24 lg:mt-12 md:ml-24">
          <p className="text-7xl xs:text-8xl sm:text-9xl md:text-10xl fonts">
            Crypto
          </p>
          <p className="text-8xl font-semibold xs:text-9xl sm:text-10xl md:text-11xl text-blue-600">
            Tracker
          </p>
        </div>
        <div className="w-full">
          <p className="text-white text-xl mt-3 w-72 xs:text-yellow-700 xs:text-2xl xs:mt-2 xs:w-80 xs:-translate-x-2 sm:-translate-x-20 md:text-3xl md:w-fit md:ml-32 md:translate-x-0   m-auto">
            <span className="text-yellow-600 font-bold">Real-Time</span>
            <br />
            Cryptocurrency Tracking at Your Fingertips
          </p>
        </div>
        <div className="  sm:w-80 ml-16 md:flex justify-start  items-center  mt-6 sm:ml-32 md:mt-10 md:ml-32">
          <div className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors  sm:w-fit duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-600 group-hover:-rotate-180 ease"></span>
              <span className="relative">Explore Me</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-14 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
