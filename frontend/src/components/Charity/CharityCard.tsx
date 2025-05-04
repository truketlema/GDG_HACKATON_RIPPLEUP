import React, { useState } from "react";

interface CharityCardProps {
  title: string;
  desc: string;
  img: string;
}

export default function CharityCard({ title, desc, img }: CharityCardProps) {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull((prev) => !prev);
  };

  return (
    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-base text-black mb-1">{title}</h3>
        <p
          className={`text-sm text-gray-500 ${showFull ? "" : "line-clamp-2"}`}
        >
          {desc}
        </p>
        <button
          onClick={toggleDescription}
          className="text-blue-500 text-xs uppercase mt-2 font-medium"
        >
          {showFull ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
}
