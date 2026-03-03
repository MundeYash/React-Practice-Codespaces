import React, { useEffect, useState, useCallback } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT = 10;

  // Fetch data when page changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNumber) => {
    if (loading) return; // Prevent duplicate calls

    setLoading(true);

    try {
      const skip = (pageNumber - 1) * LIMIT;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );

      const data = await response.json();

      // Append new data
      setItems((prev) => [...prev, ...data.products]);

      // Check if more data available
      if (items.length + data.products.length >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!hasMore || loading) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // If user is near bottom
    if (scrollTop + windowHeight >= fullHeight - 100) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore, loading]);

  // Attach scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="infinite-scroll">
      <h1>Infinite Scroll Example</h1>
      <ol>
        {items.map((item) => (
          <li key={item.id} className="item">
            {item.title}
          </li>
        ))}
      </ol>

      {loading && <p>Loading...</p>}

      {!hasMore && <p>No more items</p>}
    </div>
  );
}
