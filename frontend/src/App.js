import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import HeaderBar from "./HeaderBar.js";
import NavBar from "./NavBar.js";
import ResponsiveGrid from "./ResponsiveGrid.js";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSearch(searchValue) {
    console.log("handleSearch() called", searchValue);
    setSearchValue(searchValue);
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <HeaderBar searchCB={handleSearch}></HeaderBar>
      <ResponsiveGrid searchValue={searchValue}></ResponsiveGrid>
    </div>
  );
}

export default App;
