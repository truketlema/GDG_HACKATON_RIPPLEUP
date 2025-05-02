import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/package.css"; // Keeping this for autoShow

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  donations: number;
  image: string;
  category?: string;
  context?: "marketplace" | "category";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  goal,
  raised,
  donations,
  image,
  category,
  context = "marketplace",
}) => {
  const navigate = useNavigate();
  const progress = Math.min((raised / goal) * 100, 100);

  const handleClick = () => {
    if (context === "marketplace" && category) {
      navigate(`/services/${category}`);
    } else if (context === "category" && category) {
      navigate(`/services/${category}/${id}`);
    }
  };

  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-sm flex flex-col autoShow
      transition-all duration-300 ease-in-out
      hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
      group"
    >
      {/* Image with zoom effect */}
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-3xl 
          transition-transform duration-500 ease-in-out
          group-hover:scale-110" 
        />
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title with color change */}
          <h2 className="text-xl font-bold mb-2 
            transition-colors duration-300
            group-hover:text-orange-500">
            {title}
          </h2>
          
          <p className="text-sm text-gray-500 mb-4 line-clamp-2
            transition-opacity duration-300
            group-hover:opacity-90">
            {description}
          </p>

          <div className="mb-3">
            {/* Progress bar with glow effect */}
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2
              group-hover:bg-gray-300 transition-colors duration-300">
              <div
                className="h-full bg-orange-500 transition-all duration-500 ease-in-out
                group-hover:bg-orange-600 group-hover:shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-black font-semibold mb-1
              transition-colors duration-300
              group-hover:text-gray-800">
              <div>
                <span className="font-bold">Goal:</span> ${goal.toLocaleString()}
              </div>
              <div>{donations} <span className="font-normal">donations</span></div>
            </div>

            <div className="text-xs text-black
              transition-colors duration-300
              group-hover:text-gray-700">
              Raised: ${raised.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Enhanced button */}
        <button
          onClick={handleClick}
          className="mt-4 w-full py-2 bg-black text-white text-sm font-bold rounded-md uppercase
          transition-all duration-300 ease-in-out
          hover:bg-orange-600 hover:shadow-md
          active:scale-95"
        >
          {context === "marketplace" ? "Discover" : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;