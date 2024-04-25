import React, { useState } from "react";
import axios from "axios";

function CacheStateComponent() {
  const [cacheState, setCacheState] = useState([]);
  const [error, setError] = useState("");

  const fetchCacheState = async () => {
    try {
      const response = await axios.get("/cache-state");
      setCacheState(response.data);
      if (response.data == null) {
        setError("Cache is empty!");
        setTimeout(() => {
            setError('');
          }, 3000);
      } else {
        setError('');
      }
      
    } catch (error) {
      console.error("Error fetching cache state:", error);
      setError("Error fetching cache state");
    }
  };

  return (
    <div>
      <h2>Cache State</h2>
      <button onClick={fetchCacheState}>Fetch Cache State</button>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <ul>
        {cacheState != null && cacheState.map((entry, index) => (
          <li key={index}>
            {entry.key}: {entry.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CacheStateComponent;
