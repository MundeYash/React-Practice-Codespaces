import React from "react";

const DraggableItem = ({
  item,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <div
      className="draggable-item"
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, index)}
    >
      {item}
    </div>
  );
};

export default DraggableItem;
