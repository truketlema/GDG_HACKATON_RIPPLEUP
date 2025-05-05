import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const authToken = localStorage.getItem("authToken");
      const storedUserData = localStorage.getItem("userData");

      if (authToken && storedUserData) {
        setIsLoggedIn(true);
        setUserData(JSON.parse(storedUserData));
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    checkAuthStatus();

    // Add event listener for storage changes (in case user logs in/out in another tab)
    window.addEventListener("storage", checkAuthStatus);

    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserData(null);
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  // Function to get user initials for the profile avatar
  const getUserInitials = () => {
    if (!userData?.fullName) return "U";
    const nameParts = userData.fullName.split(" ");
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
    return (
      nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)
    ).toUpperCase();
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-row gap-1">
            <img src={logo || "/placeholder.svg"} alt="" />
            <Link to="/" className="text-xl font-bold">
              RippleUp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-400 hover:text-white font-medium">
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-400 hover:text-white font-medium"
            >
              Services
            </Link>
            <Link
              to="/charity"
              className="text-gray-400 hover:text-white font-medium"
            >
              Charity
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-white font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Donate Button or Profile Button based on login status */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2 text-white font-medium transition duration-300"
                >
                  <div className="flex items-center">
                    {userData?.profileImage ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#fd7e14]">
                        <img
                          src={userData.profileImage || "/placeholder.svg"}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#fd7e14] flex items-center justify-center text-white font-medium">
                        {getUserInitials()}
                      </div>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-2 transition-transform ${
                        isProfileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to={`/profile/${userData?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/charity"
                className="bg-[#fd7e14] hover:bg-[#fc9d50] text-white px-6 py-2 rounded-full font-medium transition duration-300"
              >
                Donate
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {isLoggedIn ? (
              <button onClick={toggleProfileDropdown} className="mr-4">
                {userData?.profileImage ? (
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#fd7e14]">
                    <img
                      src={userData.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#fd7e14] flex items-center justify-center text-white text-sm font-medium">
                    {getUserInitials()}
                  </div>
                )}
              </button>
            ) : null}
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/charity"
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Charity
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              {isLoggedIn ? (
                <>
                  <Link
                    to={`/profile/${userData?.id}`}
                    className="text-gray-400 hover:text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-400 hover:text-red-300 font-medium text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/charity"
                  className="bg-[#fd7e14] hover:bg-[#fc9d50] text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Mobile Profile Dropdown */}
        {isProfileDropdownOpen && isLoggedIn && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to={`/profile/${userData?.id}`}
                className="text-gray-400 hover:text-white font-medium"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                View Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsProfileDropdownOpen(false);
                }}
                className="text-red-400 hover:text-red-300 font-medium text-left"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
