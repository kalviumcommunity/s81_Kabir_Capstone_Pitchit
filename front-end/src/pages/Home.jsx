

import React from "react";

const Home = () => {
  return (
    <div className="p-8 bg-blue-600 text-white">
      {/* Description */}
      <p className="text-5xl font-bold mb-6 text-center">
        <span className="font-semibold">Connect Great Ideas with Great Investors</span>
        <br />
        PitchIt is where innovators present their startup ideas to investors, sponsors, and partners looking for the next big opportunity.
      </p>

 

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
