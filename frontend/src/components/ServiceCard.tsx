import React from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  goal: number;
  price?: number;
  image: string;
  category?: string;
  context?: "marketplace" | "category";
  company?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  goal,
  price,
  image,
  category,
  context = "marketplace",
  company,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (context === "marketplace" && category) {
      navigate(`/services/${category}`);
    } else if (context === "category" && category) {
      navigate(`/services/${category}/${id}`);
    }
  };

  // Calculate star rating (1-5) based on goal
  const calculateRating = () => {
    if (goal >= 50000) return 5;
    if (goal >= 30000) return 4;
    if (goal >= 15000) return 3;
    if (goal >= 5000) return 2;
    return 1;
  };

  const rating = calculateRating();

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm w-full max-w-sm flex flex-col
      transition-all duration-200 ease-in-out
      hover:shadow-md hover:-translate-y-0.5
      group border border-gray-200"
    >
      {/* Image with proper aspect ratio and subtle overlay */}
      <div className="relative pt-[60%] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover
          transition-transform duration-300 ease-in-out
          group-hover:scale-102" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Card content with improved spacing */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title with tighter letter spacing */}
        <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 tracking-tight leading-snug">
          {title}
        </h2>
        
        {/* Description with better line height */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Additional info (only shown in category context) */}
        {context !== "marketplace" && (
          <div className="mt-auto space-y-2.5">
            {/* Rating with better alignment */}
            <div className="flex items-center space-x-1.5">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-xs font-medium text-gray-700">
                {rating.toFixed(1)} Rating
              </span>
              
            </div>

            {/* Company name with better hierarchy */}
            {company && (
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                {company}
              </div>
            )}

            {/* Pricing information with better emphasis */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-2">
              {price !== undefined && (
                <div className="text-base font-semibold text-gray-900 tracking-tight">
                  ${price.toLocaleString()}<span className="text-xs text-gray-400">~</span>
              <span className="text-xs text-gray-500">
                {goal.toLocaleString()} points
              </span>
                </div>
              )}
              <div className="text-xs text-gray-500 font-medium">
                {price ? "Starting price" : "Funding goal"}
              </div>
            </div>
          </div>
        )}

        {/* Action button with better proportions */}
        <button
          onClick={handleClick}
          className="mt-5 w-full py-2.5 bg-gray-900 text-white text-xs font-semibold rounded-md uppercase tracking-wider
          transition-all duration-150 ease-in-out
          hover:bg-gray-800
          active:scale-98"
        >
          {context === "marketplace" ? "Explore Options" : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;