import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"

const Navbar = () => {
 

  return (
    <nav className="navbar"style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/events" className="navbar-link">Events</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reviews" className="navbar-link">Reviews</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
