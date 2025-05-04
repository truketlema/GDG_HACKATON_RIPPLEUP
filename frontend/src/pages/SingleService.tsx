import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packagesData } from "../services/packagesApi";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header"
import { FiSearch, FiArrowLeft } from "react-icons/fi";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Try these solutions (pick one):

    // 1. Basic solution - force immediate scroll
    window.scrollTo(0, 0);

    // 2. More reliable version with setTimeout
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);

    // 3. Alternative using document.documentElement
    document.documentElement.scrollTop = 0;

    // 4. Comprehensive solution covering all browsers
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  }, [category]);  // Triggers on component mount and when ID changes

  const categoryPackages = packagesData.filter(
    (pkg) => pkg.category?.toLowerCase() === category?.toLowerCase()
  );

  const filteredPackages = categoryPackages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 🧭 Styled Back Button to Match PackageDetail Page */}
      <button
        onClick={() => navigate("/services")}
        className="flex items-center text-gray-600 hover:text-orange-500 text-lg mb-6 transition-all duration-300 hover:-translate-x-1"
      >
        <FiArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Back
      </button>

      {/* —— Centered Static Text Section —— */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold capitalize mb-2">
          {category} Packages
        </h1>
        <p className="text-gray-500">Find the best services in {category} category</p>
      </div>

      {/* 🚀 Stylish Search Input */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search within this category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* 🧩 Display Filtered Packages */}
      {filteredPackages.length === 0 ? (
        <p className="text-gray-500 text-center">No packages found for this search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <ServiceCard
              key={pkg.id}
              {...pkg}
              context="category"
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default CategoryPage;
