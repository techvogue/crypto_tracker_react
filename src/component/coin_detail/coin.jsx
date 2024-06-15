import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./coin.css";
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
        params: { localization: "false" },
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
  }, []);

  if (loading) {
    return (
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!coinData) {
    return <p>No data available</p>;
  }

  return (
    <div className="bg-zinc-900 ">
      <div className="bg-zinc-800 rounded-lg w-4/5 md:w-3/5 mx-auto p-5 translate-y-20 mb-32">
        <div className=" flex justify-center p-4 ">
          <img className="w-28" src={coinData.image.large} alt="" />
          <div className="text-4xl text-stone-200 p-2">
            <p className="capitalize">{coinData.symbol}</p>
            <p>{coinData.name}</p>
          </div>
        </div>
        <div className="text-start w-4/5 md:w-3/5 mx-auto text-stone-200 text-2xl">
          <p className=" ">
            Current Price: ${coinData.market_data.current_price.usd}
          </p>
          <p>
            Change-24hr :- 
             <span className={`${coinData.market_data.price_change_percentage_24h_in_currency.usd>0?"text-green-500":"text-red-600"}`}>  {coinData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
              2
            )}%</span>
            
          </p>
          <p>Day high: {coinData.market_data.high_24h.usd}</p>
          <p>Day low: <span className={`${coinData.market_data.price_change_percentage_24h_in_currency.usd>0?"text-green-500":"text-red-600"}`}> {coinData.market_data.low_24h.usd}</span> </p>
          <p> Market Cap : {coinData.market_data.market_cap.usd}</p>
        </div>

      
      </div>
      <div className="text-stone-200 w-4/5 mx-auto text-justify">
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: coinData.description.en }}
          ></p>
        </div>
    </div>
  );
}
