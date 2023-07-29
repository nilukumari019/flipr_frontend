import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { logout } from "./http_request";
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <>
      <div className="navbar">
        <div className="travel">
          <h3>Travel Planner Pro</h3>
        </div>
        <div className="menu">
          <Link to="/destination">Destinations</Link>
          <Link to="/hotel">Hotels</Link>
          {isAuthenticated ? (
            <>
              <Link to="/booking">Booking</Link>
              <Link onClick={logout}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
