import React from "react";
import Coins from "../Dashboard/get-detail";
import './style.css'
export default function Home() {    

  return (
    <div className="max-w-full bg-[url('/src/assets/crypto-phone.jpg')] md:bg-[url('/src/assets/crypto_web.jpg')] bg-center md:bg-[top] bg-cover min-h-screen flex justify-start">

       <div className=" w-full">
        <div className="text-stroke w-fit m-auto mt-24 xs:mt-9">
        <p className="text-7xl font-bold xs:text-8xl sm:text-9xl text-blue-600">Crypto</p>
        <p className="text-8xl xs:text-9xl sm:10xl text-white ">Tracker</p>
        </div>
       <div className="w-full ">
       <p className="text-white xs:text-yellow-800 text-xl xs:text-2xl mt-3 xs:mt-2 w-72 xs:w-80 xs:-translate-x-2 translate-x-2  m-auto"><span className="text-yellow-600 font-bold ">Real-Time</span> <br /> Cryptocurrency Tracking at Your Fingertips</p>
       </div>
        
       </div>
       
       
  

    
  
     
    </div>
  );
}
