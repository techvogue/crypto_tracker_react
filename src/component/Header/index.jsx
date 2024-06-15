import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState("hidden");

  const handleNavBar = () => {
    setNav(nav === "hidden" ? "" : "hidden");
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setNav("hidden");
    }
  };

  return (
    <>
      <nav className="bg-white px-3 md:px-6 border-gray-200 dark:bg-stone-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLinkClick}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-blue-700 text-3xl">Track</span>Crypto
            </span>
          </Link>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleNavBar}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${nav} w-full text-center text-xl md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:text-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-stone-900 md:dark:bg-stone-900 dark:border-gray-700">
              <Link to="/" onClick={handleLinkClick}>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Home
                </p>
              </Link>
              <Link to="/dashboard" className="hover:text-gray-600 duration-70" onClick={handleLinkClick}>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Dashboard
                </p>
              </Link>
              <Link to="/contact" className="hover:text-gray-600 duration-70" onClick={handleLinkClick}>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </p>
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
