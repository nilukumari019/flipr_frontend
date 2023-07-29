
import React, { useState } from "react";
import "./Booking.css";
const Booking = () => {
  // Sample room details data
  const [roomDetails, setRoomDetails] = useState([
    {
      roomNumber: 101,
      type: "Single",
      price: 100,
      availability: true,
    },
    {
      roomNumber: 102,
      type: "Double",
      price: 150,
      availability: false,
    },
    {
      roomNumber: 103,
      type: "Suite",
      price: 250,
      availability: true,
    },
  ]);

  return (
    <div>
      <h2>Hotel Room Details</h2>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Type</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {roomDetails.map((room) => (
            <tr key={room.roomNumber}>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>${room.price}</td>
              <td>{room.availability ? "Available" : "Not Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
