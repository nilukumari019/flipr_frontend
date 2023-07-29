import React, { useState } from 'react';
import './Destination.css'; // Import the CSS file containing the styles

const LocationSearch = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleFromChange = (event) => {
    setFromLocation(event.target.value);
  };

  const handleToChange = (event) => {
    setToLocation(event.target.value);
  };

  const handleSearch = () => {
    // Perform your search or navigation logic here based on 'fromLocation' and 'toLocation'
    // For example, you could use a navigation library like react-router-dom to navigate to a new page or display search results.
    // Or, you could make an API call to get directions or other location-related data.
  };

  return (
    <div className="container">
      <div className="row">
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={fromLocation}
          onChange={handleFromChange}
          placeholder="Enter starting location"
        />
      </div>
      <div className="row">
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={toLocation}
          onChange={handleToChange}
          placeholder="Enter destination location"
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSearch;
