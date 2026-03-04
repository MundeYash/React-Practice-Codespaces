import React from "react";
import FileNode from "./FileNode";
import "./FileExplorerStyle.css";

const FileExplorer = ({ data }) => {
  return (
    <div className="explorer-container">
      {data.map((node, index) => (
        <FileNode key={index} node={node} />
      ))}
    </div>
  );
};

export default FileExplorer;
