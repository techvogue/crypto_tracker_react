import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Coins() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const inputHandler = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);

    if (inputValue === "") {
      setFilteredData([]); // Reset filteredData when input is empty
      setPage(1); // Reset page to 1 when input is empty
    } else {
      const filtered = myData.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
      setPage(1); // Reset page number when performing a new search
    }
  };

  const selectPageHandler = (selectedPage) => {
    const dataToUse = filteredData.length > 0 ? filteredData : myData;
    const pageCount = Math.ceil(dataToUse.length / 10);

    if (selectedPage >= 1 && selectedPage <= pageCount && selectedPage !== page) {
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
        setMyData(slicedData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <form className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={inputHandler}
            value={input}
            type="search"
            id="default-search"
            autoComplete="off" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Cryptocurrency"
            required
          />
        </div>
      </form>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5">
        {(filteredData.length > 0 ? filteredData : myData)
          .slice((page - 1) * 10, page * 10)
          .map((name) => (
            <Link
              to={`/CoinDetail/${name.id}`}
              className="text-center p-5 rounded-2xl bg-zinc-900"
              key={name.id}
            >
              <div className="flex h-14 gap-4 items-center">
                <div className="h-full">
                  <img className="h-full mx-auto" src={name.image} alt="" />
                </div>
                <div>
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

              <div>
                <p className="text-2xl text-start pt-2">
                  Price: ${name.current_price}
                </p>
                <p
                  className={`text-xl ${
                    name.price_change_24h > 0
                      ? "text-green-500"
                      : "text-red-600"
                  } text-start`}
                >
                  Change: {name.price_change_percentage_24h.toFixed(2)}%
                </p>
                <p className="text-start">MarketCap: ${name.market_cap}</p>
              </div>
            </Link>
          ))}
      </div>

      <div className="mt-5 flex justify-center items-center h-44">
        <ul className="inline-flex items-center justify-center text-base h-full">
          <li className={`${page === 1 ? "hidden" : ""}`}>
            <span
              className="flex items-center justify-center px-2 md:px-4 h-14 w-full ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => selectPageHandler(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...Array(Math.ceil((filteredData.length > 0 ? filteredData.length : myData.length) / 10))].map((_, i) => (
            <li key={i}>
              <span
                className={`${
                  page === i + 1
                    ? "bg-gray-300 text-black"
                    : "text-gray-500 bg-gray-300 dark:text-gray-400 dark:bg-gray-800"
                } flex items-center justify-center px-3 md:px-4 h-14 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer dark:border-gray-700`}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            </li>
          ))}
          <li className={`${page === Math.ceil((filteredData.length > 0 ? filteredData.length : myData.length) / 10) ? "hidden" : ""}`}>
            <span
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
