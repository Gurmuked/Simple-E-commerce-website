import React from "react";
import {products} from "./ComparisonTable";

const ComparisonHeader = () => (

  <div className="grid grid-cols-[200px_repeat(3,minmax(200px,1fr))] gap-x-6 border-b-2 border-gray-300 pb-8 mx-20">
    <div>
      <h4 className="text-black text-lg block mb-2">Go to Product page for more PRODUCTS</h4>
      <span className="text-xs text-gray-400">View more</span>
    </div>
    {products.map((product) => (
      <div key={product.id} className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-28 h-20 object-contain mb-2" />
        <div className="font-semibold">{product.name}</div>
        <div className="text-yellow-500 text-sm mb-1">
          {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
        </div>
        <div className="text-xs text-gray-500 mb-2">{product.reviews} reviews</div>
        <button className="bg-yellow-600 text-white px-4 py-1 rounded text-sm">{product.addLabel}</button>
      </div>
    ))}
    <div>
      <h4 className="text-black text-lg block mb-2">Add A Product</h4>
      <select name="viewMore" id="drop" defaultValue="View More" className="border rounded px-2 py-1">
        <option value="" disabled>View More</option>
        <option value="sofa">Sofa</option>
        <option value="chair">Chairs</option>
      </select>
    </div>
  </div>

);

export default ComparisonHeader;