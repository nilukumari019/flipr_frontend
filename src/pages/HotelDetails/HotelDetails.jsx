import React, { useEffect, useState } from "react";
import "./HotelDetails.scss";
import { MdLocationOn } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { hotelById, paymentHandler } from "../../components/http_request";

const HotelDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        hotelById(id, setData);
    }, []);
    const redirect = useNavigate();
    return (
        <>
            <div className="HotelDetails">
                <div className="Info">
                    <img src={data.image} alt="" />
                    <div>
                        {data.name}:
                        <div className="Tag">
                            INR: <b>&#8377;{data.price}.00</b>
                            <br />
                            <div className="Country">
                                <MdLocationOn style={{ color: "black" }} />
                                <b>Location:</b> {data.country}
                            </div>
                            <div className="type">
                                <b>Type:</b> {data.type}
                            </div>
                            <div className="Amenities">
                                <b>Amenities:</b>
                                <div className="Facilities">
                                    {data.amenities === undefined ? (
                                        <p>Nothing</p>
                                    ) : (
                                        <>
                                            {data.amenities?.map((item) => (
                                                <div className="new">
                                                    {item}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button
                        onClick={() => paymentHandler(data.price, redirect)}
                    >
                        Book Now
                    </button>
                    <p>OR</p>
                    <button>Add to Favorite</button>
                </div>
            </div>
        </>
    );
};

export default HotelDetails;    
