

import React from "react";


const pitches = [
  {
    id: 1,
    name: "AI-powered Smart Nutrition Guide for College Students",
    imageUrl: "https://via.placeholder.com/500x300", 
    description: "A platform that helps college students manage their nutrition using AI-powered recommendations.",
  },
  {
    id: 2,
    name: "AI-driven Lucid Dreaming Platform - DreamNet",
    imageUrl: "https://via.placeholder.com/500x300", 
    description: "A social networking platform for lucid dreaming, helping users connect and share their experiences.",
  },
  {
    id: 3,
    name: "AI-based Personal Branding and Business Coaching",
    imageUrl: "https://via.placeholder.com/500x300", 
    description: "A personalized AI system designed to help individuals improve their personal brand and business strategies.",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-full border border-gray-300 mb-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Welcome, Kabir Dharshaan</h2>

        <div className="flex items-center mb-6">
          <div className="w-32 h-32 mr-6">
            <img
              src="your-profile-image-url.jpg" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Full Stack & AI Engineering</h3>
            <p className="text-sm text-gray-500">Kalasalingam University</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Passionate about AI, web development, and business innovation. Always seeking to learn and improve.
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">My Pitches</h3>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pitches.map((pitch) => (
            <div key={pitch.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
              <img
                src={pitch.imageUrl}
                alt={pitch.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-600 mb-2">{pitch.name}</h4>
              <p className="text-sm text-gray-600">{pitch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
