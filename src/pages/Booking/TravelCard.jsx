import React from "react";
import "./TravelCard.css"; // Import the CSS file for styling

const TravelCard = () => {
    return (
        <div className="aeroplane-container">
            <div className="aeroplane-info">
                <h2 className="aeroplane-name">Indigo</h2>
                <p className="aeroplane-type">
                    <p className="aeroplane-type-type">Type:</p>
                    <p>Boeing 737</p>
                </p>
                <p className="aeroplane-seat">
                    <p className="aeroplane-seat-seat">Seat Number:</p>
                    <p> 12A</p>
                </p>
                <p className="aeroplane-destination">
                    <p className="aeroplane-destination-dest">Destination:</p>
                    <p>City B</p>
                </p>
                <p className="aeroplane-time">
                    <p className="aeroplane-time-time">Departure Time:</p>
                    <p> 10:00 AM</p>
                </p>
            </div>
        </div>
    );
};

export default TravelCard;
