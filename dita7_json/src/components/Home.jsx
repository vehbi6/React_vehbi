import React, { useEffect, useState } from 'react';
import Bloglist from './Bloglist.jsx';

function Home() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null); // 1. Add error state

  useEffect(() => {
    fetch('http://localhost:1234/listqd')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data'); // 1. Throw error if response is not ok
        }
        return res.json();
      })
      .then(data => {
        setList(data);
        setError(null); // clear error if fetch succeeds
      })
      .catch(err => {
        setError(err.message); // 2. Set error message
      });
  }, []);

  const deleteButton = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <h1>Home page</h1>

      {/* 3. Show error if it exists */}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      <Bloglist list={list} x="Lista e Nxenesve" deleteButton={deleteButton} />
    </>
  );
}

export default Home;
