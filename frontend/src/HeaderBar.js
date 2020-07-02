import React from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import FacilityModal from "./FacilityModal.js";
import { openModal, updateFacilityListData } from "./Redux.js";
import { useDispatch } from "react-redux";
import { GET_facilityListData } from "./APIConsumers.js";

function HeaderBar({ searchCB }) {
  const dispatch = useDispatch();
  function addButtonClickHandler() {
    console.log("clickHandler inside HeaderBar");
    dispatch(openModal());
  }

  function refreshClickHandler() {
    //fetch data and set it in store
    let facilityData = GET_facilityListData();
    dispatch(updateFacilityListData(facilityData));
  }

  return (
    <div>
      <SearchBar className="m-1" searchCB={searchCB}></SearchBar>
      <button className="m-1" onClick={refreshClickHandler}>
        Refresh
      </button>
      <button className="m-1" onClick={addButtonClickHandler}>
        +
      </button>
      <FacilityModal></FacilityModal>
    </div>
  );
}

export default HeaderBar;
