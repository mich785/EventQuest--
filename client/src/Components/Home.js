import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function Home() {
  return (
    <>
      <h1>Hi</h1>
      <LoginPage/>
      <div className="alternative">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Home;
