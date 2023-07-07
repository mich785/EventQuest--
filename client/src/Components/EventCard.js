import React from "react";
import "../Styles/eventcard.css";

function EventCard({ name,  category, country }) {
  return (
    <div className = "card">
      <h4 className="heading">{name}</h4>
      <h5>Category: {category}</h5>
      <h5>Country: {country}</h5>
    </div>
  );
}

export default EventCard;
