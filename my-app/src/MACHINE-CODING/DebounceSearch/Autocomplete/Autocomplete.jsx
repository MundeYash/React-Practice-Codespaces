import React, { useState, useEffect } from "react";
import "./AutocompleteStyle.css";
export default function Autocomplete() {
  // Stores what user types
  const [query, setQuery] = useState("");

  // Stores search results
  const [results, setResults] = useState([]);

  // Loading state for better UX
  const [loading, setLoading] = useState(false);

  // This useEffect runs whenever query changes
  useEffect(() => {
    // If query is empty, clear results
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Set loading true before API call
    setLoading(true);

    // Debounce logic:
    // Wait 500ms before making API call
    const timer = setTimeout(() => {
      fetchData(query);
    }, 500);

    // Cleanup function:
    // If user types again before 500ms,
    // clear previous timer
    return () => clearTimeout(timer);
  }, [query]);

  // Function to call API
  const fetchData = async (searchText) => {
    try {
      // Using dummy JSON API for autocomplete demo
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`,
      );
      const data = await response.json();

      setResults(data.products || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Debounced Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <div className="results">
        {results.length === 0 && !loading && query && <p>No results found</p>}

        {results.map((item) => (
          <div key={item.id} className="result-item">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
