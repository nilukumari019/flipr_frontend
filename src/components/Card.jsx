import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ name, country, id, image }) => {
    const redirect = useNavigate();
    const handleButtonClick = () => {
        redirect(`/hotel/${id}`);
    };

    return (
        <div className="Card">
            <img src={image} alt="" />
            <div className="Info">{name}</div>
            <div className="ExtraInfo">{country}</div>
            <div className="Extra">
                Upscale Hotel with a spa and sports court
            </div>
            <button type="button" onClick={handleButtonClick}>
                See Details
            </button>
        </div>
    );
};

export default Card;
