import React from "react";
import "./App.css";

function SearchBar({ searchCB }) {
  function handleChange(event) {
    console.log("SearchBar handleChange()");
    setSearchTerm(event.target.value);
    searchCB(event.target.value);
  }
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={handleChange}
      value={searchTerm}
    ></input>
  );
}

export default SearchBar;
