import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";

import "./App.css";

import HeaderBar from "./HeaderBar.js";
import FacilityModal from "./FacilityModal.js";
import NavBar from "./NavBar.js";
import ResponsiveGrid from "./ResponsiveGrid.js";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  let facilityList = [
    {
      id: 0,
      name: "Facility name 1",
      address: "123 Fake Street",
      size: "Small",
    },
    {
      id: 1,
      name: "Facility name 2",
      address: "456 Fake Street",
      size: "Medium",
    },
    {
      id: 2,
      name: "Facility name 3",
      address: "789 Toronto Street",
      size: "Large",
    },
    {
      id: 3,
      name: "Facility name 4",
      address: "101 Toronto Street",
      size: "Small",
    },
  ];

  function handleAdd() {
    console.log("handleAdd() called");
    setIsOpen(true);
  }

  function handleClose() {
    console.log("closeHandler() called");
    setIsOpen(false);
  }

  function handleRefresh() {
    console.log("handleRefresh() called");
  }

  function handleSearch(searchValue) {
    console.log("handleSearch() called", searchValue);
    setSearchValue(searchValue);
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <HeaderBar
        clickHandler={handleAdd}
        refreshHandler={handleRefresh}
        searchCB={handleSearch}
      ></HeaderBar>
      <ResponsiveGrid
        data={facilityList}
        searchValue={searchValue}
      ></ResponsiveGrid>
      <FacilityModal isOpen={isOpen} closeCB={handleClose}></FacilityModal>
    </div>
  );
}

export default App;
