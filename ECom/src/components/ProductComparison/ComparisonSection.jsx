import React from "react";

// Accepts props: title, rows
const ComparisonSection = ({ title, rows }) => (
  <div className="mb-8 mx-20">
    <div className="col-span-3 mt-6 mb-2 font-bold text-lg">{title}</div>
    <div className="grid grid-cols-4 gap-4 ">
      {
       rows.map((row, idx) => (
        <div key={idx} className="flex flex-col ">
          {row.label.map((val, vIdx) => (
            <div key={vIdx} className="py-2 px-2">{val}</div>
          ))}
        </div>
       ))
      }
    </div>
  </div>
);

export default ComparisonSection;