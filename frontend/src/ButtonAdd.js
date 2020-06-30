import React from "react";
import "./App.css";

function ButtonAdd({ clickHandler, label }) {
  return <button onClick={clickHandler}>{label}</button>;
}

export default ButtonAdd;
