import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import "../Styles/home.css";

  function Home() {
    return (
      <div className="home-container">
        <h1>Welcome to EventQuest</h1>
        <LoginPage />
        <div className="alternative">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }

export default Home;
