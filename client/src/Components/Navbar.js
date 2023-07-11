import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the login page or any desired route
          history.push("/");
          alert ('Log Out Successful!')
        } else {
          // Handle unsuccessful logout
          console.error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
        // Handle any error that occurred during logout
      });
  }

  return (
    <nav
      className="navbar"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}
    >
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/events" className="navbar-link">
            Events
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/reviews" className="navbar-link">
            Reviews
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/eventform" className="navbar-link">
            Add Event
          </Link>
        </li>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
