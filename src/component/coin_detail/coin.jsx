import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CoinDetail() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      setLoading(true);
      setError(null);
      
      const options = {
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${coinId}`,
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-3DiJgRfCGsSbjXybghzA4R27",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCoinData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId]);

  if (loading) {
    return (<div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
         <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>);
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!coinData) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Coin: {coinId}</h1>
      <p>Name: {coinData.name}</p>
      <p>Symbol: {coinData.symbol}</p>
      <p>Current Price: {coinData.market_data.current_price.usd}</p>
  
    </div>
  );
}
