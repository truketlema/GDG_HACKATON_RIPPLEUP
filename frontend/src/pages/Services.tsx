import React, { useState, useEffect, useRef } from "react";
import { packagesData, PackageItem } from "../services/packagesApi";
import ServiceCard from "../components/ServiceCard";
import Pagination from "../components/Pagination";
import { FiSearch } from "react-icons/fi";

const Services: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const packagesPerPage = 9;
  const topRef = useRef<HTMLDivElement>(null);

  // 🔍 Filter packages based on search input
  const filteredPackages = packagesData.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const currentPackages = filteredPackages.slice(
    (currentPage - 1) * packagesPerPage,
    currentPage * packagesPerPage
  );

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({
        top: topRef.current.getBoundingClientRect().top + window.scrollY - 20,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div ref={topRef} />
      
      {/* 👇 Centered header texts */}
      <div className="text-center mb-8">
        <div className="text-sm text-gray-400 mb-2">Home {">"} Services</div>
        <h1 className="text-3xl font-bold mb-2">Services Marketplace</h1>
        <p className="text-gray-500">Discover and book premium services</p>
      </div>

      {/* 🚀 Modern Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search for services..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on new search
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
      </div>

      {/* 🔍 No results message */}
      {filteredPackages.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No services found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentPackages.map((pkg: PackageItem) => (
              <ServiceCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default Services;
