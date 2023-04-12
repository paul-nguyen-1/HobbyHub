import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>MealHub</h1>
      <input></input>
      <div className="navigation">
        <button>Home</button>
        <button>Create</button>
      </div>
    </div>
  );
}

export default Navbar;
