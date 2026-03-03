import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./PaginationStyle.css";
export default function PaginationHelper() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const LIMIT = 10; // items per page

  // Fetch data whenever page changes
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const skip = (page - 1) * LIMIT;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );
      const result = await response.json();

      setData(result.products);
      setTotalPages(Math.ceil(result.total / LIMIT));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="pagination-helper">
      <h1>Reusable Pagination</h1>

      <div className="list">
        <ol>
          {data.map((item) => (
            <li key={item.id} className="list-item">
              {item.title}
            </li>
          ))}
        </ol>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
