import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packagesData } from "../services/packagesApi";
import Header from "../components/Header"
import { FiArrowLeft, FiCheck, FiStar, FiClock, FiCalendar } from "react-icons/fi";

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packagesData.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]); // Triggers on component mount and when ID changes

  if (!pkg) {
    return (
      <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen animate-fadeIn">
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Package Not Found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-orange-500 text-lg mb-8 transition-all duration-300 hover:-translate-x-1"
        >
          <FiArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image + Price */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[0.98]">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
              ${pkg.price}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-6">
            <div className="transition-opacity duration-500">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                {pkg.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
            </div>

            {/* Package Details Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Package Details
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{pkg.details}</p>
            </div>

            {/* What's Included */}
            <div className="bg-white p-8 rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                What's Included
              </h3>
              <ul className="space-y-4">
                {pkg.features.map((f, i) => (
                  <li 
                    key={i} 
                    className="flex items-start text-lg text-gray-700 animate-fadeIn"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Button */}
            <div className="pt-4">
              <button
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                <span>Book This Package</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PackageDetail;