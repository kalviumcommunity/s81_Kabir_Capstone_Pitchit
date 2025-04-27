

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const [role, setRole] = useState("pitcher");
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // useNavigate hook for routing

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { username, displayName, email, password } = formData;

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          displayName,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Account created successfully! Redirecting...");
        setTimeout(() => {
          navigate("/login"); // Navigate to login page after successful signup
        }, 2000);
      } else {
        setError(data.error || "An error occurred during signup.");
      }
    } catch (err) {
      setError("An error occurred during signup.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      {/* Logo */}
      <h1 className="text-4xl font-bold mb-8 text-blue-600">PitchIt</h1>

      {/* Signup Card */}
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={formData.displayName}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-3 rounded-lg border"
            autoComplete="new-password"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 rounded-lg border"
          >
            <option value="pitcher">Pitcher</option>
            <option value="investor">Investor</option>
          </select>

          <button
            type="submit"
            className="mt-4 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
