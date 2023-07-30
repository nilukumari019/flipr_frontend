import React, { useState } from "react";
import "./Hotel.css"; // Import the CSS file containing the styles
import Card from "../../components/Card";

const Hotel = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <>
            <div className="Hotel">
                <label htmlFor="Hotels">Hotel:</label>
                <select>
                    <option>Select your choice of Hotel</option>
                    <option value="Reddison">Reddison</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Gopalganj">Gopalganj</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Sikar">Sikar</option>
                    <option value="Bikaner">Bikaner</option>
                    <option value="Hamirpur">Hamirpur</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Palampur">Palampur</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <div className="card-wrapper">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Hotel;
