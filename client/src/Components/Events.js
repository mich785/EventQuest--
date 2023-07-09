import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../Styles/events.css";
import { useHistory} from 'react-router-dom'

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  function handleReviews(event){
    history.push({
      pathname:"/reviews",
      state:{eventForReview: event}})
}

  return (
    <>
     <div className="row">
      <form>
        <input
            type="text"
            className="input"
            placeholder="Search for events"
            onChange={(e) => setSearch(e.target.value)}
        /> 
      </form>
      </div>
      <div className="row">
        {events.filter((event)=>{
          return search.toLowerCase() === "" ? event :
          event.name.toLowerCase().includes(search)
        }).map((event) => (
          <EventCard
          handleReviews={handleReviews}
            key={event.id}
          event = {event}
            // id={event.id}
            // name={event.name}
            // description={event.description}
            // category={event.category}
            // country={event.country}
            // place={event.place}
          />
        ))}
      </div>
    </>
  );
}

export default Events;