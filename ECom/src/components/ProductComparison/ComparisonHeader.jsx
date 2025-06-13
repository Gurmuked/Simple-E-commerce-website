import React from "react";
import {products} from "./ComparisonTable";

const ComparisonHeader = () => (

  <div className="grid grid-cols-[200px_repeat(3,minmax(200px,1fr))] gap-x-6 border-b-2 border-gray-300 mt-20 pb-8 mx-20 items-start">
    <div className="mt-4">
      <h4 className="text-black text-lg block mb-2">Go to Product page for more Products</h4>
      <span className="text-xs text-gray-400">View more</span>
    </div>
    {products.map((product) => (
      <div key={product.id} className="flex flex-col items-start">
        <div className="w-[300px] h-[250px] bg-beige items-center">
          <img src={product.image} alt={product.name} className="w-[70%] h-[90%] object-contain text-center" />
        </div>

        <div className="font-semibold">{product.name}</div>
        <div className="font-semibold">{product.price}</div>
        <div className="flex text-start">
          <p>{product.rating}</p>
          <p className="text-yellow-500 text-sm mb-1">
            {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
          </p>
          <p > | {product.reviews} reviews</p>
        </div>
      </div>
    ))}
    <div className="mt-4">
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