import React, { useState } from "react";
import "../Styles/eventform.css";

function EventForm() {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        country,
        category,
        place,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the response indicates a successful event creation
        if (data.success) {
          // Perform the necessary actions, such as displaying a success message
          alert("Event created successfully");
          // Reset the form fields
          setPlace("");
          setCountry("");
          setDescription("");
          setCategory("");
          setName("");
        } else {
          console.log("Event creation failed:", data.error);
          // Handle any errors or display appropriate messages
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        // Handle any errors that occurred during the request
      });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add Event</h1>
        <label htmlFor="name">Event Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Event Date and Time:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="category">Event Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="place">Event Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <button type="submit" className="create">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
