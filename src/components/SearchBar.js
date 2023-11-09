import './SearchBar.css'
// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false)

  const handleSearch = () => {
    onSearch(searchTerm.trim()); // Trim to remove leading/trailing white spaces
  };

  return (
    <>
    {show ? (<div className="search-bar">
      <input
        type="text"
        placeholder="Search drugs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>): null}
    </>
  );
};

export default SearchBar;
