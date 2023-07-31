import React from "react";

const BookingCard = ({ src, hotel, country }) => {
    return (
        <div className="hotel-container">
            <img src={src} alt="" className="hotel-image" />
            <div className="hotel-info">
                <h2 className="hotel-name">{hotel}</h2>

                <p className="hotel-address">{country}</p>
            </div>
        </div>
    );
};

export default BookingCard;
