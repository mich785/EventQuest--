import React from "react";
import "../Styles/eventcard.css";

function EventCard({event, handleReviews }) {
  return (
    <div className = "card">
      <div className="card__content">
      <h4 className="heading">{event.name}</h4>
      <p>Date and time:{event.description}</p>
      <p>Venue:{event.place}({event.country})</p>
      <h5>Category: {event.category}</h5>
      <button type="button"  onClick={() => handleReviews(event)}  className="leave_review">Reviews</button>
      </div>
    </div>
  );
}

export default EventCard;
