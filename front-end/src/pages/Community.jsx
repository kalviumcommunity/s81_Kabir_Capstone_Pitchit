

import React, { useState } from "react";
import Navbar from "../components/Navbar"; 
const Community = () => {
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
    
      <h2 className="text-3xl font-semibold mb-4">Communities</h2>
      <p className="text-gray-600 mb-8">
        Join communities of like-minded innovators and investors to grow your ideas and network.
      </p>

  
      <div className="flex space-x-4 mb-8">
       
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search communities by name or description"
          className="px-4 py-2 border rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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

   
      <div>
    
        <p className="text-gray-600">Displaying communities based on search and selected category.</p>
      </div>
    </div>
  );
};

export default Community;
