import React, { useState } from 'react';
import axios from 'axios';

function SetCacheComponent() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [expiration, setExpiration] = useState(''); 
  const [successMsg, setSuccessMsg] = useState('');

  const setValueToCache = async () => {
    try {
      const data = {
        value: value,
        expiration: parseInt(expiration)
      };
      await axios.post(`/cache/${key}`, data);
      console.log('Key/value pair added successfully');
      setSuccessMsg('Key/value pair added successfully!')
      setTimeout(() => {
        setSuccessMsg('');
      }, 3000);
      setKey('');
      setValue('');
      setExpiration('');
    } catch (error) {
      console.error('Error setting value to cache:', error);
    }
  };

  return (
    <div>
      <h2>Add key & value to cache with an expiration</h2>
      <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Key" />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" />
      <input type="number" value={expiration} onChange={(e) => setExpiration(e.target.value)} placeholder="Expiration (in seconds)" />
      <button onClick={setValueToCache}>Set</button>
      {successMsg && <p style={{ color: "green", fontWeight: "bold" }}>{successMsg}</p>}
    </div>
  );
}

export default SetCacheComponent;
