import React from 'react'
import "./HotelDetails.css";

const HotelDetails = () => {
  return (
    <>
    <div className="HotelDetails">
      <img src="https://media.radissonhotels.net/image/radisson-hotel-kandla/guest-room/16256-114057-f63762891_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=384" alt="" />
      <div className="Info">Reddison Blu Hotel:
      <div className="Country">(Gujarat, India)</div>
      <div className="Tag">INR: <b>$140.00</b><br/>
      <div className="Amenities"><b>Amenities:</b>
      <div className="Facilities">
        <div className="new">Swimming Pool</div>
        <div className="new">Spa</div>
        <div className="new">Court</div>
      </div>
      </div>
      </div>
      </div>

    </div>
    
    </>
  )
}

export default HotelDetails