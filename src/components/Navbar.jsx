import React from "react";
import { Outlet, Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>

      <div className="navbar">
        <div className="travel">
            <h3>Travel Planner Pro</h3>
        </div>
        <div className="menu">
            <Link to="">Destinations</Link>
            <Link to="">Hotels</Link>
            <Link to="">Flights</Link>
            <Link to="">Bookings</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
