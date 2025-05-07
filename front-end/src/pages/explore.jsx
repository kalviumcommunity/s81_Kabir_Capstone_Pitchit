

import React, { useState, useEffect } from "react";
import axios from "axios";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [pitches, setPitches] = useState([]);

  const categories = [
    "All Categories",
    "Health Care",
    "AI & ML",
    "Fintech",
    "Education",
    "Agriculture",
  ];

 
  useEffect(() => {
    const fetchPitches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/pitches");
        setPitches(res.data); 
      } catch (error) {
        console.error("Failed to fetch pitches", error);
      }
    };

    fetchPitches();
  }, []);


  const filteredPitches = pitches.filter((pitch) => {
    const matchesSearchQuery =
      pitch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      pitch.category === selectedCategory;

    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div className="p-8">
    
     
     
      <h2 className="text-3xl font-semibold mb-4">Explore Ideas</h2>
      <p className="text-gray-600 mb-8">
        Discover innovative startup pitches from entrepreneurs around the world. Explore, connect, and grow your network.
      </p>

    
      <div className="flex space-x-4 mb-8">
       
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search startup ideas by name or description"
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
        {filteredPitches.length === 0 ? (
          <p className="text-gray-600">No pitches found matching your criteria.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPitches.map((pitch) => (
              <div key={pitch._id} className="border p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{pitch.name}</h3>
                <p className="text-sm text-gray-600">{pitch.category}</p>
                <p className="mt-2">{pitch.description}</p>
                {pitch.image && (
                  <img
                    src={`http://localhost:5000/${pitch.image}`} 
                    alt={pitch.name}
                    className="mt-2 rounded"
                  />
                )}
                <p className="mt-2">
                  <strong>Funds Required:</strong> ₹{pitch.fundsRequired}
                </p>
                <p>
                  <strong>Estimated Profit:</strong> ₹{pitch.estimatedProfit}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
