import React, { useState } from "react";

const FileNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = node.type === "folder";

  const toggleFolder = () => {
    if (isFolder) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="file-node">
      <div
        className={`node-label ${isFolder ? "folder" : "file"}`}
        onClick={toggleFolder}
      >
        {isFolder && <span className="arrow">{isOpen ? "▼" : "▶"}</span>}
        <span className="node-name">{node.name}</span>
      </div>

      {isFolder && isOpen && node.children && (
        <div className="children">
          {node.children.map((child, index) => (
            <FileNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileNode;
