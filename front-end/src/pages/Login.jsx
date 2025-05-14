

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "", 
    password: "", 
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmail = formData.usernameOrEmail.includes("@");

    try {
      // Sending login request to the backend API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: isEmail ? formData.usernameOrEmail : "", 
          username: !isEmail ? formData.usernameOrEmail : "", 
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data.message);
        navigate("/profile"); // Redirect to the profile page
      } else {
        console.error("Login failed:", data.message || data.error);
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">PitchIt</h1>
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Username or Email"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            required
          />
          <button
            type="submit"
            className="mt-4 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

