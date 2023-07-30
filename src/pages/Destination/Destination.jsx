import React, { useEffect, useState } from "react";
import "./Destination.scss";
import Country from "../../components/Country";

const LocationSearch = () => {
    const [form, setForm] = useState({
        from: "Select where to start",
        to: "Select where to go",
    });

    const [country, setCountry] = useState([]);
    useEffect(() => {
        Country(setCountry);
    }, []);

    return (
        <div className="destination">
            <div className="row">
                <label htmlFor="from">From:</label>
                <select
                    value={form.from}
                    onChange={(e) =>
                        setForm((t) => {
                            return { ...t, from: e.target.value };
                        })
                    }
                >
                    <option>Select where to start</option>
                    {country.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                <label htmlFor="to">To:</label>
                <select
                    value={form.to}
                    onChange={(e) =>
                        setForm((t) => {
                            return { ...t, to: e.target.value };
                        })
                    }
                >
                    <option>Select where to go</option>
                    {country.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <button>Search</button>
        </div>
    );
};

export default LocationSearch;
