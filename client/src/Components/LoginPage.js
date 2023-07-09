import React, { useState } from "react";
import "../Styles/login.css";

function LoginPage({onFormSwitch, onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
   fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email ,password }),
          })
            .then((r) => r.json())
            .then((user) => onLogin(user));
        
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-span">
          <label htmlFor="email" className="label">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-span">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="submit-container">
          <button className = "login" type="submit">Login</button>
        </div>
      </form>
      <button className= "switch" onClick={()=>onFormSwitch('signup')}>Don't have an account?Signup</button>
    </div>
  );
}

export default LoginPage;
