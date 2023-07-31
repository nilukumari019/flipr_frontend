import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { booked, fav } from "./http_request";

const Card = ({ name, country, id, image, price }) => {
    const Favorite = useSelector((state) => state.favorite);

    const redirect = useNavigate();
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        redirect(`/hotel/${id}`);
    };

    const [favorite, setFavorite] = useState(Favorite?.indexOf(id) !== -1);

    return (
        <div className="Card">
            <img src={image} width={250} alt="" />
            <div className="Info">{name}</div>
            <div className="ExtraInfo">{country}</div>
            <div className="Extra">Price: {price}</div>
            <button type="button" onClick={handleButtonClick}>
                See Details
            </button>
            <div className="favorite" onClick={() => setFavorite((t) => !t)}>
                {favorite ? (
                    <AiTwotoneHeart
                        onClick={() => {
                            dispatch(authActions.removeFromFavorite(id));
                            booked();
                        }}
                        style={{ color: "red" }}
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={() => {
                            dispatch(authActions.addToFavorite(id));
                            fav();
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Card;
