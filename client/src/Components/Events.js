import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            description={event.description}
            category={event.category}
            country={event.country}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
