import React, { useState } from 'react';
import './Hotel.css'; // Import the CSS file containing the styles

const Hotel = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter your search term"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Hotel;
