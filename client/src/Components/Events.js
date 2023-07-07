import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../Styles/events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  // const [categoryFilter, setCategoryFilter] = useState("");

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
      <form>
        <input
            type="text"
            className="form-control"
            placeholder="Search for events"
            onChange={(e) => setSearch(e.target.value)}
        /> 
      </form>
      <div className="row">
        {events.filter((event)=>{
          return search.toLowerCase()=== "" ? event : 
          event.name.toLowerCase().includes(search) ||  event.category.toLowerCase().includes(search)
        }).map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            category={event.category}
            country={event.country}
          />
        ))}
      </div>
    </>
  );
}

export default Events;
