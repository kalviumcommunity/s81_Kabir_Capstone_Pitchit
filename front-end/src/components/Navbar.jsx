

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 shadow-md">
//       {/* Left Section */}
//       <div className="flex items-center space-x-8">
//         <h1 className="text-2xl font-bold text-white">PitchIt</h1>
//         <ul className="flex space-x-6 text-white">
//           <li>
//             <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
//           </li>
//           <li>
//             <Link to="/explore" className="hover:text-gray-200 transition duration-300">Explore</Link>
//           </li>
//           <li>
//             <Link to="/communities" className="hover:text-gray-200 transition duration-300">Communities</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className="flex space-x-4">
//         <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
//           Sign Up
//         </button>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




















import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-white">PitchIt</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-gray-200 transition duration-300">Explore</Link>
          </li>
          <li>
            <Link to="/communities" className="hover:text-gray-200 transition duration-300">Communities</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
          Sign Up
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
