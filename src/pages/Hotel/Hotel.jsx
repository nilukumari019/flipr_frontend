import React, { useEffect, useState } from "react";
import "./Hotel.css"; // Import the CSS file containing the styles
import Card from "../../components/Card";
import Country from "../../components/Country";
import { hotel } from "../../components/http_request";

const Hotel = () => {
    const [country, setCountry] = useState([]);
    const [input, setInput] = useState("Select your choice of Hotel");
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        Country(setCountry);
    }, []);

    return (
        <>
            <div className="Hotel">
                <label htmlFor="Hotels">Hotel:</label>
                <select value={input} onInput={(e) => setInput(e.target.value)}>
                    <option>Select your choice of Hotel</option>
                    {country.map((item, i) => (
                        <option value={item} key={i}>
                            {item}
                        </option>
                    ))}
                </select>
                <button onClick={() => hotel(input, setHotels)}>Search</button>
            </div>
            <div>
                <div className="card-wrapper">
                    {hotels.length === 0 && (
                        <p className="nope">Nothing to show</p>
                    )}
                    {hotels.map((item, i) => (
                        <Card
                            key={i}
                            price={item.price}
                            name={item.name}
                            country={item.country}
                            id={item._id}
                            image={item.image}
                            Favorite={item.favorite}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hotel;
