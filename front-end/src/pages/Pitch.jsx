
import React, { useState } from "react";

const Pitch = () => {
  const [pitchData, setPitchData] = useState({
    name: "",
    category: "",
    description: "",
    videoLink: "",
    pdfLink: "",
    fundsRequired: "",
    estimatedProfit: "",
    image: null,
    pptFile: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPitchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "image") {
      setPitchData((prevData) => ({
        ...prevData,
        image: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (name === "pptFile") {
      setPitchData((prevData) => ({
        ...prevData,
        pptFile: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(pitchData).forEach((key) => {
      if (pitchData[key]) {
        formData.append(key, pitchData[key]);
      }
    });

    try {
      const response = await fetch("http://localhost:5000/api/pitches/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Pitch Created Successfully!");
        console.log("Pitch Created:", data);
      } else {
        alert("Failed to create pitch.");
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error creating pitch:", error);
      alert("An error occurred while creating the pitch.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-2xl border border-gray-300">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Create Your Pitch</h2>

        <form onSubmit={handleSubmit}>
          {/* Project Name */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="name">Project Idea Name</label>
            <input type="text" id="name" name="name" value={pitchData.name} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your project idea name" required />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="category">Project Category</label>
            <select id="category" name="category" value={pitchData.category} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required>
              <option value="">Select a category</option>
              <option value="AI">AI</option>
              <option value="Web Development">Web Development</option>
              <option value="Business">Business</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="description">Description</label>
            <textarea id="description" name="description" value={pitchData.description} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4" placeholder="Enter a detailed description of your project idea" required />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="image">Upload an Image</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-32 h-32 mt-4 object-cover rounded-md" />}
          </div>

          {/* Video Link */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="videoLink">Google Drive Video Link</label>
            <input type="url" id="videoLink" name="videoLink" value={pitchData.videoLink} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste the Google Drive video link" />
          </div>

          {/* PDF Link */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="pdfLink">Google Drive PDF Link</label>
            <input type="url" id="pdfLink" name="pdfLink" value={pitchData.pdfLink} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste the Google Drive PDF link" />
          </div>

          {/* Funds Required */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="fundsRequired">Funds Required</label>
            <input type="number" id="fundsRequired" name="fundsRequired" value={pitchData.fundsRequired} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the required amount" required />
          </div>

          {/* Estimated Profit */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="estimatedProfit">Estimated Profit</label>
            <input type="number" id="estimatedProfit" name="estimatedProfit" value={pitchData.estimatedProfit} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the estimated profit" required />
          </div>

          {/* PPT Upload */}
          <div className="mb-6">
            <label className="block text-xl font-semibold text-gray-700 mb-2" htmlFor="pptFile">Upload PPT (Optional)</label>
            <input type="file" id="pptFile" name="pptFile" accept=".ppt,.pptx,.pdf" onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
              Submit Pitch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pitch;
