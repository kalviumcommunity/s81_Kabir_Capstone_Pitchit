

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your login logic here (API call, etc.)

    // After login, reset form
    setFormData({
      usernameOrEmail: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      {/* Logo */}
      <h1 className="text-4xl font-bold mb-8 text-blue-600">PitchIt</h1>

      {/* Login Card */}
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
          <input
            type="text"
            name="usernameOrEmail"
            placeholder="Username or Email"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            autoComplete="new-password"
          />

          <button type="submit" className="mt-4 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
