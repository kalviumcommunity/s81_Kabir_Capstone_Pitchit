
import React from "react";
import { useNavigate } from "react-router-dom";

const pitches = [
  {
    id: 1,
    name: "Smart Nutrition Guide (AI)",
    imageUrl: "https://via.placeholder.com/500x300",
    description: "AI-driven meal planning, nutrient tracking, and personalized health insights for college students.",
    tags: ["AI", "HealthTech", "Students"],
  },
  {
    id: 2,
    name: "DreamNet – Lucid Dreaming Platform",
    imageUrl: "https://via.placeholder.com/500x300",
    description: "A social network and AI guide for lucid dreaming, allowing users to dream, share, and connect.",
    tags: ["AI", "Lucid Dreaming", "Neurotech"],
  },
  {
    id: 3,
    name: "AI Personal Branding Coach",
    imageUrl: "https://via.placeholder.com/500x300",
    description: "Build your influence, business mindset, and content strategy with a personal AI-driven mentor.",
    tags: ["AI", "Personal Branding", "Business"],
  },
];

const Profile = () => {
  const navigate = useNavigate();

  const handleNewPitchClick = () => {
    navigate("/pitch");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-full border border-gray-300 mb-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Welcome, Kabir Dharshaan</h2>
        <div className="flex flex-col sm:flex-row items-center mb-6">
          <div className="w-32 h-32 mb-4 sm:mb-0 sm:mr-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Kabir Dharshaan"
              className="w-full h-full rounded-full object-cover border-2 border-blue-400"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-700">Full Stack & AI Engineering</h3>
            <p className="text-sm text-gray-500">Kalasalingam University</p>
            <p className="text-gray-600 mt-2">
              Passionate about AI, Web Development, and Business Innovation. Constant learner. Future builder.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-blue-600 mb-4">My Pitches</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pitches.map((pitch) => (
            <div
              key={pitch.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <img
                src={pitch.imageUrl}
                alt={pitch.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-600 mb-2">{pitch.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{pitch.description}</p>
              <div className="flex flex-wrap gap-2">
                {pitch.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNewPitchClick}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold transition-transform hover:scale-105"
      >
        + New Pitch
      </button>
    </div>
  );
};

export default Profile;
