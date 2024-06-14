import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Coins() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= myData.length / 10 &&
      selectedPage != page
    ) {
      setPage(selectedPage);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: { vs_currency: "usd" },
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-3DiJgRfCGsSbjXybghzA4R27",
            },
          }
        );

        const slicedData = response.data.slice(0, 50);
        console.log("Sliced data (0 to 10):", slicedData);
        console.log(response.size);
        setMyData(slicedData);
        setCount(myData.length / 10);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);
  if (loading) {
    return (
      <div className="flex w-full space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid  xs:grid-cols-2  md:grid-cols-3 gap-5  ">
        {myData.slice(page * 10 - 10, page * 10).map((name) => {
          return (
            <Link
              to={`/CoinDetail/${name.id}`}
              className="text-center p-5  rounded-2xl bg-zinc-900"
              key={name.id}
            >
              
              <div className="flex h-14 gap-4   items-center ">
                <div className="h-full">
                  <img className="h-full mx-auto" src={name.image} alt="" />
                </div>
                <div className="">
                  <p
                    className={`capitalize ${
                      name.price_change_24h > 0
                        ? "text-green-500"
                        : "text-red-600"
                    } text-2xl`}
                  >
                    {name.symbol}
                  </p>
                  <p className="text-2xl">{name.name}</p>
                </div>
              </div>

              <div className="">
              <p className="text-2xl text-start pt-2"> price : ${name.current_price}</p>
              <p
                className={`text-xl ${
                  name.price_change_24h > 0 ? "text-green-500" : "text-red-600"
                } text-start`}
              >
                change: {name.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="text-start">MarketCap:-${name.market_cap}</p>
              </div>
              
            </Link>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center items-center  h-44">
        <ul class=" inline-flex items-center justify-center  text-base h-full">
          <li className={`${page == 1 ? "hidden" : ""}`}>
            <span
                
              className="flex items-center justify-center px-2 md:px-4 h-14 w-full ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => selectPageHandler(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...Array(myData.length / 10)].map((_, i) => {
            return (
              <li key={i}>
                <span
                  href="#"
                  className={`${
                    page == i + 1
                      ? "bg-gray-300 text-black"
                      : "text-gray-500  bg-gray-300 dark:text-gray-400  dark:bg-gray-800"
                  } flex items-center justify-center px-3 md:px-4  h-14 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:border-gray-700  `}
                  onClick={() => selectPageHandler(i + 1)}
                >
                  {i + 1}{" "}
                </span>
              </li>
            );
          })}

          <li className={`${page == myData.length / 10 ? "hidden" : ""}`}>
            <span
              href="#"
              className="flex items-center justify-center px-2 md:px-4 h-14 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => selectPageHandler(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
