// Explore.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Assuming the Navbar component is in the 'components' folder

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Health Care",
    "AI & ML",
    "Fintech",
    "Education",
    "Agriculture",
  ];

  return (
    <div className="p-8">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-4">Explore Ideas</h2>
      <p className="text-gray-600 mb-8">
        Discover innovative startup pitches from entrepreneurs around the world. Explore, connect, and grow your network.
      </p>

      {/* Search and Dropdown */}
      <div className="flex space-x-4 mb-8">
        {/* Search Box */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search startup ideas by name or description"
          className="px-4 py-2 border rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* List of Ideas (Placeholder) */}
      <div>
        {/* Here you can add dynamic idea data or use the search functionality */}
        <p className="text-gray-600">Displaying startup ideas based on search and selected category.</p>
      </div>
    </div>
  );
};

export default Explore;
