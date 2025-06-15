import React from "react";
import { FaSearch } from "react-icons/fa";

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const Categories = () => {
  return (
    <div className="p-4 w-full max-w-2xl">
      {/* Search Box */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
      </div>

      {/* Categories Title */}
      <h2 className="text-lg font-semibold mb-4">Categories</h2>

      {/* Category List */}
      <ul className="space-y-3">
        {categories.map((cat, index) => (
          <li key={index} className="flex justify-between text-gray-600">
            <span>{cat.name}</span>
            <span>{cat.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
