import React, { useState } from 'react';
import axios from 'axios';

function GetCacheComponent() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const getValueFromCache = async () => {
    try {
      const response = await axios.get(`/cache/${key}`);
      setValue(response.data.value);
      setError('');
    } catch (error) {
      setValue('');
      setError("key is not present in the cache.");
    }
  };

  return (
    <div>
      <h2>Get value from cache using a key</h2>
      <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Key" />
      <button onClick={getValueFromCache}>Get</button>
      <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>
      {value && <p>Value: {value}</p>}
    </div>
  );
}

export default GetCacheComponent;
