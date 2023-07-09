import React, { useState } from "react";
import "../Styles/login.css";

function LoginPage({onFormSwitch}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Validate the login email
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const users = data.users;
        
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
          console.log("Login successful")
          return fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })
            .then((r) => r.json())
            .then((user) => onLogin(user));
        } else {
          console.log("Invalid login email");
        }
      })
      .catch((error) => {
        console.log("Error retrieving user data", error);
      });
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
