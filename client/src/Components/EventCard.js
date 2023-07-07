import React from "react";

function EventCard({ name, description, category, country }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <h6>Category: {category}</h6>
      <h6>Country: {country}</h6>
    </div>
  );
}

export default EventCard;
