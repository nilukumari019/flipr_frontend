import React from "react";
import "./Booking.css"; // Import the CSS file for styling
import BookingCard from "../../components/BookingCard";
import TravelCard from "./TravelCard";

const Booking = () => {
    return (
        <>
            <h1 className="booked">Travel Booked</h1>
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <h1 className="booked">Hotel Booked</h1>
            <BookingCard
                src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&downsize=328:180&crop=328:180;0,19&output-format=jpg"
                hotel="Paradise"
            />
            <BookingCard
                src="https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg"
                hotel="Taj"
            />
            <BookingCard
                src="https://i.kinja-img.com/gawker-media/image/upload/s--S-3T-M-5--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/18lppqix6qgcejpg.jpg"
                hotel="JWT Mariiot"
            />
        </>
    );
};

export default Booking;
