import React, { useState } from "react";


function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        className="input"
        placeholder="Search for events"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
