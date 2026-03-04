import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import "./DragDropListStyle.css";

const DragDropList = () => {
  const [items, setItems] = useState([
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "CSS",
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const updatedItems = [...items];
    const draggedItem = updatedItems[draggedIndex];

    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDraggedIndex(null);
  };

  return (
    <div className="list-container">
      <h2>Drag and Drop List</h2>
      {items.map((item, index) => (
        <DraggableItem
          key={index}
          item={item}
          index={index}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default DragDropList;
