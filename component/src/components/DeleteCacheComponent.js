import React, { useState } from 'react';
import axios from 'axios';

function DeleteCacheComponent() {
    const [successMsg, setSuccessMsg] = useState('');

  const clearCache = async () => {
    try {
      await axios.delete(`/cache`);
      setSuccessMsg('Cache cleared successfully!')
      // Automatically clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  };

  return (
    <div>
      <h2>Delete entire cache</h2>
      <button onClick={clearCache}>Clear Cache</button>
      <div style={{ color: 'green', fontWeight: 'bold' }}>{successMsg}</div>
    </div>
  );
}

export default DeleteCacheComponent;
