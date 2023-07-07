import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import "../Styles/events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const nameMatches = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatches = event.category.toLowerCase() === categoryFilter.toLowerCase();
    return nameMatches && (categoryFilter === "" || categoryMatches);
  });

  if (events.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search events..." value={searchTerm} onChange={handleSearch} />
        <select value={categoryFilter} onChange={handleCategoryFilter}>
          <option value="">All Categories</option>
          <option value="category1">Conferences</option>
          <option value="category2">Festival</option>
          {/* Add more options for different categories */}
        </select>
      </div>
      <div className="row">
        {filteredEvents.map((event) => (
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
