import React, { useState } from "react";

const AccordionComponent = ({ items = [], allowMultiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (activeIndexes.includes(index)) {
        setActiveIndexes(activeIndexes.filter((i) => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    } else {
      setActiveIndexes(activeIndexes.includes(index) ? [] : [index]);
    }
  };

  if (!items.length) return <div>No Items Available</div>;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span>{activeIndexes.includes(index) ? "-" : "+"}</span>
          </button>

          {activeIndexes.includes(index) && (
            <div className="px-4 py-3 bg-white border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
