import React from "react";
import { Outlet, Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>

      <div className="navbar">
      <Link className="logo-pic" to="App.jsx"><img src=".travel logo.jpg" alt=""/></Link>
        <div className="travel">
            <h3>Travel Planner Pro</h3>
        </div>
        <div className="menu">
            <Link to="">Destinations</Link>
            <Link to="">Hotels</Link>
            <Link to="">Flights</Link>
            <Link to="">Bookings</Link>
            <Link to="">Login</Link>
            <Link to="">Sign Up</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
