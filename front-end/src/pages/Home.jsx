

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [pitches, setPitches] = useState([]);

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

  return (
    <div className="min-h-screen">
      <div className="p-8 bg-blue-600 text-white">
        <p className="text-5xl font-bold mb-6 text-center">
          <span className="font-semibold">
            Connect Great Ideas with Great Investors
          </span>
          <br />
          PitchIt is where innovators present their startup ideas to investors,
          sponsors, and partners looking for the next big opportunity.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Explore
          </button>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Latest Pitches</h2>
        {pitches.length === 0 ? (
          <p>No pitches available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pitches.map((pitch) => (
              <div key={pitch._id} className="border p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{pitch.name}</h3>
                <p className="text-sm text-gray-600">{pitch.category}</p>
                <p className="mt-2">{pitch.description}</p>
                {pitch.image && (
                  // <img
                  //   src={`http://localhost:5000/uploads/${pitch.image}`}
                  //   alt={pitch.name}
                  //   className="mt-2 rounded"
                  // />
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

      <footer className="bg-blue-800 text-white text-center py-4 mt-12">
        <p>&copy; {new Date().getFullYear()} PitchIt. All Rights Reserved.</p>
        <p>Made by Kabir Dharshaan</p>
      </footer>
    </div>
  );
};

export default Home;
