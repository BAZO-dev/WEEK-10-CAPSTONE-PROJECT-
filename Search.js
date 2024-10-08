import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (username) {
      navigate(`/profile/${username}`);
    }
  };

  return (
    <div>
      <h2>Enter GitHub Username</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
