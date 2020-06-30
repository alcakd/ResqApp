import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderBar from "./HeaderBar.js";
import FacilityModal from "./FacilityModal.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeaderBar></HeaderBar>
      <FacilityModal></FacilityModal>
    </div>
  );
}

export default App;
