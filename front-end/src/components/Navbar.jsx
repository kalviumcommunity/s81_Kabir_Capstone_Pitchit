

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-black">PitchIt</h1>
        <ul className="flex space-x-6 text-black">
          <li>
            <Link to="/" className="hover:text-sky-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-sky-600 transition duration-300">Explore</Link>
          </li>
          <li>
            <Link to="/communities" className="hover:text-sky-600 transition duration-300">Communities</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 ml-auto">
        <Link
          to="/signup"
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition duration-300"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 text-black border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
