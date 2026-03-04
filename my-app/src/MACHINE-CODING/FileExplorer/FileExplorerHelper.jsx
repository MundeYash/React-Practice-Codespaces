import React from "react";
import FileExplorer from "./FileExplorer";
import "./FileExplorerStyle.css";

const fileData = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Header.jsx", type: "file" },
          { name: "Sidebar.jsx", type: "file" },
          { name: "Component1.jsx", type: "file" },
          { name: "Component2.jsx", type: "file" },
        ],
      },
      { name: "App.jsx", type: "file" },
      { name: "index.js", type: "file" },
    ],
  },
  {
    name: "package.json",
    type: "file",
  },
];

const FileExplorerHelper = () => {
  return (
    <div className="app-container">
      <h2>VS Code Style File Explorer</h2>
      <FileExplorer data={fileData} />
    </div>
  );
};

export default FileExplorerHelper;
