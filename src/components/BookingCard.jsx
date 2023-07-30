import React from "react";

const BookingCard = ({ src, hotel }) => {
    return (
        <div className="hotel-container">
            <img src={src} alt="" className="hotel-image" />
            <div className="hotel-info">
                <h2 className="hotel-name">{hotel}</h2>
                <p className="hotel-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ultricies, mi eu cursus lacinia, quam quam laoreet
                    quam, eu eleifend tortor magna id est. Donec hendrerit magna
                    non libero egestas, nec volutpat enim fermentum.
                </p>
                <p className="hotel-address">1234 Main Street, City, Country</p>
            </div>
        </div>
    );
};

export default BookingCard;
