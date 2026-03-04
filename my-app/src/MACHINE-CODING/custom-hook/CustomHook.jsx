import React, { useState } from "react";
import useDebounce from "./useDebounce/useDebounce";
import useFetch from "./useFetch/useFetch";
import "./CustomHookStyle.css";

const CustomHook = () => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  const { data, loading, error } = useFetch(
    debouncedQuery
      ? `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`
      : null,
  );

  return (
    <div className="app-container">
      <h2>Custom Hook Demo (useDebounce + useFetch)</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div>
        {" "}
        <ol>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </ol>
      </div>
    </div>
  );
};

export default CustomHook;
