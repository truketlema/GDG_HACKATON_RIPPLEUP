import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState<"customer" | "business">("customer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear error if all good
    setError("");

    // Add your sign-up logic here...

    // Simulate successful signup
    setTimeout(() => {
      if (role === "customer")
        navigate("/services");
      else
        navigate("/profile")
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-200 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-8">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Create an Account</h2>

        {/* 👥 Role selection */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            className={`px-4 py-2 rounded-l-lg font-semibold transition ${
              role === "customer"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRole("customer")}
          >
            Customer
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-r-lg font-semibold transition ${
              role === "business"
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRole("business")}
          >
            Business
          </button>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Additional fields for business */}
          {role === "business" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Business Name</label>
                <input
                  type="text"
                  placeholder="Your Business Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Website (optional)</label>
                <input
                  type="url"
                  placeholder="https://yourbusiness.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
