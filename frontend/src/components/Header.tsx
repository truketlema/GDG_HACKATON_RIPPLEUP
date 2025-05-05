import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-row gap-1">
            <img src={logo} alt="" />
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

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className="bg-[#fd7e14] hover:bg-[#fc9d50] text-white px-6 py-2 rounded-full font-medium transition duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600"
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
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#fd7e14] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-[#fd7e14] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/charity"
                className="text-gray-700 hover:text-[#fd7e14] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Charity
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#fd7e14] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#fd7e14] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/donate"
                className="bg-[#fd7e14] hover:bg-[#fc9d50] text-white px-6 py-2 rounded-full font-medium transition duration-300 inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
