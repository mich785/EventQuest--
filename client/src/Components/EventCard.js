import React from "react";
import "../Styles/eventcard.css";

function EventCard({ name,description, category,handleReviews,id,place,country }) {
  return (
    <div className = "card">
      <div className="card__content">
      <h4 className="heading">{name}</h4>
      <p>Date and time:{description}</p>
      <p>Venue:{place}({country})</p>
      <h5>Category: {category}</h5>
      <button type="button"  onClick={() => handleReviews(id)}  className="leave_review">Reviews</button>
      </div>
    </div>
  );
}

export default EventCard;
