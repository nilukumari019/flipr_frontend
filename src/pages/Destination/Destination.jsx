import React, { useState } from "react";
import "./Destination.scss";  

const LocationSearch = () => {
    const [form, setForm] = useState({
        from: "Select where to start",
        to: "Select where to go",
    });

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
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Jodhpur">Jodhpur</option>
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
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Jodhpur">Jodhpur</option>
                </select>
            </div>
            <button>Search</button>
        </div>
    );
};

export default LocationSearch;
