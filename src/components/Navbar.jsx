import React from "react";
import { Outlet, Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
<<<<<<< HEAD

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
=======
      <div> </div>
>>>>>>> 1b0a67553e32f76e3641022b95d7c01b268fc406
      <Outlet />
    </>
  );
};

export default Navbar;
