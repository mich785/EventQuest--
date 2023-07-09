import React, { useState } from "react";
import "../Styles/signup.css";

function SignUp({ onLogin, onFormSwitch }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // Check if the response indicates a successful signup
        if (data.success) {
          // Perform the login action
          onLogin();
        } else {
          console.log("Signup failed:", data.errors);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
      setUsername('')
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="signup" type="submit">Submit</button>
      </form>
      <button onClick={() => onFormSwitch("login")} className="switch-button">
        Already have an account? Log in
      </button>
    </>
  );
}

export default SignUp;
