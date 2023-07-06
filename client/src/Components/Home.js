import React from "react";
import LoginPage from "./LoginPage";
import { BrowserRouter as  Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Hi</h1>
      <LoginPage />
      <div className="alternative">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default Home;
