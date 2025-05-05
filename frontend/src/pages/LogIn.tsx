import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Add auth API call here

      setTimeout(() => {
        setError("");
        navigate("/profile");
      }, 500);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
