import React from 'react';

const About = () => {
  return (
    <div className="bg-zinc-950 px-6  text-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl shadow-[0px_0px_20px_1px_#bcbcbc]  p-8 md:p-10 bg-zinc-900 my-10 rounded-2xl  ">
        <h1 className="text-4xl font-bold mb-4 text-center">About CryptoTracker</h1>
        <p className="text-lg mb-6">
          Welcome to CryptoTracker, your go-to platform for real-time cryptocurrency data. Our website provides you with the latest information on various cryptocurrencies, ensuring you stay updated on market trends and price movements.
        </p>

       

        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">Real-Time Data: Access real-time data on a wide range of cryptocurrencies. Stay informed about the latest prices, market caps, and volume changes.</li>
          <li className="text-lg">Price Tracking: See the current price of your favorite cryptocurrencies. Our platform updates prices continuously to ensure you get the most accurate information.</li>
          <li className="text-lg">Market Cap Insights: Understand the market capitalization of each cryptocurrency, giving you a clear picture of their market value.</li>
          <li className="text-lg">Price Change Analysis: Track the price changes over the last 24 hours. See which cryptocurrencies are gaining momentum and which ones are experiencing a downturn.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Technology</h2>
        <p className="text-lg mb-6">
          CryptoTracker is built using modern web technologies to provide a fast and responsive user experience:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">React: Our website is developed using React, a powerful JavaScript library for building user interfaces. This allows us to create a dynamic and interactive platform.</li>
          <li className="text-lg">Tailwind CSS: We use Tailwind CSS for styling, enabling us to design a clean and responsive layout that works seamlessly across all devices.</li>
          <li className="text-lg">CoinGecko API: Our data is sourced from the CoinGecko API, a reliable and comprehensive cryptocurrency data provider. This ensures that you have access to the most accurate and current data available.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Choose CryptoTracker?</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">User-Friendly Interface: Our platform is designed with you in mind. Navigate easily and find the information you need quickly.</li>
          <li className="text-lg">Reliable Data: With CoinGecko as our data provider, you can trust the accuracy and timeliness of the information presented.</li>
          <li className="text-lg">Constant Updates: The cryptocurrency market never sleeps, and neither do we. Our site constantly updates to provide you with the latest market trends and data.</li>
        </ul>

       
      </div>
    </div>
  );
};

export default About;
