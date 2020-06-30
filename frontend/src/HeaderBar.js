import React from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import ButtonAdd from "./ButtonAdd.js";

function HeaderBar() {
  return (
    <div>
      <SearchBar></SearchBar>
      <ButtonAdd></ButtonAdd>
    </div>
  );
}

export default HeaderBar;
