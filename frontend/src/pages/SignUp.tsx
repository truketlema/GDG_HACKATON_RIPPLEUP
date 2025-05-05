import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState<"customer" | "business">("customer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [businessDocs, setBusinessDocs] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    // Business validation
    if (role === "business" && (!businessDocs || !certificate)) {
      setError("Please upload required business documents");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
  
      if (role === "business") {
        formData.append("business_name", businessName);
        if (website) formData.append("website", website);
        if (businessDocs) formData.append("business_docs", businessDocs);
        if (certificate) formData.append("certificate", certificate);
      }
  
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      // Check for both response.ok and successful data
      if (!response.ok || !data.token) {
        throw new Error(data.detail || data.message || "Signup failed. Please try again.");
      }
  
      if (role === "business") {
        // Clear any previous errors before showing success modal
        setError("");
        setShowVerificationModal(true);
      } else {
        // For customers, proceed with login
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        localStorage.setItem("userId", data.user.id);
        navigate(`/profile/${data.user.id}`);
      }
    } catch (err) {
      // Only show error if it's not a successful business submission
      if (!showVerificationModal) {
        setError(err.message || "An error occurred during signup");
      }
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-200 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-8">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Create an Account
        </h2>

        {/* Role selection */}
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
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password (min 8 characters)
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              minLength={8}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
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

          {/* Business-specific fields */}
          {role === "business" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Website (optional)
                </label>
                <input
                  type="url"
                  placeholder="https://yourbusiness.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Business Documents (PDF/Image)
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setBusinessDocs(e.target.files?.[0] || null)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload business registration or license
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Legal Certificate (PDF/Image)
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setCertificate(e.target.files?.[0] || null)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload any legal certification documents (optional)
                </p>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700 transition flex justify-center items-center ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 hover:underline">
            Log In
          </a>
        </p>
      </div>

      {/* Business Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                Verification Required
              </h3>
              <div className="mt-4 text-gray-600">
                <p>
                  Thank you for registering your business. We've received your
                  documents and will verify them shortly.
                </p>
                <p className="mt-2">
                  You'll receive an email notification once your account is
                  approved. This process typically takes 1-2 business days.
                </p>
                <p className="mt-2 font-medium">
                  You can't access business features until verification is
                  complete.
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setShowVerificationModal(false);
                    navigate("/");
                  }}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
