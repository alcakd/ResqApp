import React from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import ButtonAdd from "./ButtonAdd.js";

function HeaderBar({ clickHandler, refreshHandler, searchCB }) {
  return (
    <div>
      <SearchBar searchCB={searchCB}></SearchBar>
      <button onClick={refreshHandler}>Refresh</button>
      {/* How do you avoid passing down callbacks */}
      <ButtonAdd clickHandler={clickHandler} label={"+"}></ButtonAdd>
    </div>
  );
}

export default HeaderBar;
