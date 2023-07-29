import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  const handleButtonClick = () => {
    // Redirect to the new webpage
    // window.location.href = "https://github.com/dashboard";
    <Link to="/booking">Booking</Link>
  };

  return (
    <div className="Card">
      <img
        src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&downsize=328:180&crop=328:180;0,19&output-format=jpg"
        alt=""
      />
      <div className="Info">Reddison Blu Hotel</div>
      <div className="ExtraInfo">Surat, Gujarat</div>
      <div className="Extra">Upscale Hotel with a spa and sports court</div>
      <button type="button" onClick={handleButtonClick}>
        See Details
      </button>
    </div>
  );
};

export default Card;
