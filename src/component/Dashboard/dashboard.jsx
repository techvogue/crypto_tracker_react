import React from "react";

import Coins from "./get-detail";
export default function Dashboard()
{

 return(
   <div className="max-w-full  bg-black text-white  px-10">
   <h1 className="text-center min-h-12 py-4 w-full text-3xl">Dashboard</h1>
   
    <Coins></Coins>
   
   </div>
 );

}