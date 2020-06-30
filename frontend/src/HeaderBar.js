import React from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import ButtonAdd from "./ButtonAdd.js";

function HeaderBar({ clickHandler, refreshHandler, searchCB }) {
  return (
    <div>
      <SearchBar className="m-1" searchCB={searchCB}></SearchBar>
      <button className="m-1" onClick={refreshHandler}>
        Refresh
      </button>
      {/* How do you avoid passing down callbacks */}
      <ButtonAdd
        className="m-1"
        clickHandler={clickHandler}
        label={"+"}
      ></ButtonAdd>
    </div>
  );
}

export default HeaderBar;
