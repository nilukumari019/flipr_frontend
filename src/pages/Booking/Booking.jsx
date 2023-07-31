import React, { useEffect, useState } from "react";
import "./Booking.css";
import BookingCard from "../../components/BookingCard";
import { fill } from "../../components/http_request";

const Booking = () => {
    const [fav, setFav] = useState([]);
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(fav);
    useEffect(() => {
        fill(setFav, setBook, setLoading);
    }, []);
    return (
        <>
            {!loading && (
                <>
                    <h1 className="booked">Hotel Booked</h1>
                    {book.map((item) => (
                        <BookingCard
                            src={item.image}
                            hotel={item.name}
                            country={item.country}
                        />
                    ))}
                    <h1 className="booked">Favorite Hotel</h1>
                    {fav.map((item) => (
                        <BookingCard
                            src={item.image}
                            hotel={item.name}
                            country={item.country}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default Booking;
