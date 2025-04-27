

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("pitcher");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      {/* Logo */}
      <h1 className="text-4xl font-bold mb-8 text-blue-600">PitchIt</h1>

      {/* Signup Card */}
      <div className="bg-white text-black rounded-lg p-8 shadow-lg w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Display Name"
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border"
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border"
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
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
