import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">RippleUP</h2>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
              sit egestas enim consectetur donec faucibus. Ornare ac dolor porta
              tellus viverra arcu a ridiculus. Nisl nunc rhoncus ut elementum
              magna id et suscipit.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#fd7e14] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#fd7e14] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#fd7e14] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#fd7e14] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links - First Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/charity"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Charity
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links - Second Column */}
          <div className="lg:mt-0 md:mt-0 mt-0">
            <h3 className="text-xl font-semibold mb-6 lg:mt-0 md:mt-0 mt-[-20px]">
              More Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  F.A.Q
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-[#fd7e14] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone
                  size={20}
                  className="mr-3 text-[#fd7e14] flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">Phone: (251) 366-7883</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 text-[#fd7e14] flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">
                  Address: Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={20}
                  className="mr-3 text-[#fd7e14] flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">Email: info@rippleup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright RippleUp 2025. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#fd7e14] text-sm transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-[#fd7e14] text-sm transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-[#fd7e14] text-sm transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
