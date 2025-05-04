import React, { useState, useMemo } from "react";

interface Charity {
  category: string;
  [key: string]: any; // allows for additional fields if needed
}

interface Category {
  name: string;
  count: number;
}

interface SidebarProps {
  charities: Charity[];
  onCategorySelect: (category: string) => void;
}

export default function Sidebar({
  onCategorySelect,
  charities,
}: SidebarProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: Category[] = useMemo(() => {
    const counts: Record<string, number> = charities.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [charities]);

  const filteredCategories = useMemo(() => {
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [categories, searchTerm]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="border p-2 w-full rounded mb-4"
      />
      <h2 className="font-semibold mb-2">Categories</h2>
      <ul className="space-y-1 text-sm text-gray-700">
        <li
          className={`flex justify-between items-center px-2 py-1 rounded cursor-pointer ${
            activeCategory === "all"
              ? "bg-orange-100 text-orange-600 font-semibold"
              : "hover:text-orange-500"
          }`}
          onClick={() => handleCategoryClick("all")}
        >
          <span>All</span>
          <span className="text-gray-400">({charities.length})</span>
        </li>
        {filteredCategories.map((cat) => (
          <li
            key={cat.name}
            className={`flex justify-between items-center px-2 py-1 rounded cursor-pointer ${
              activeCategory === cat.name
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "hover:text-orange-500"
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <span>{cat.name}</span>
            <span className="text-gray-400">({cat.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
