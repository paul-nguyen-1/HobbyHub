import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 style={{ color: "white" }}>MealHub</h1>
      </Link>
      <input
        className="navInput"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div className="navigation" onClick={() => setSearch("")}>
        <Link to="/">
          <h3 className="navLink">Home</h3>
        </Link>
        <Link to="/createPost">
          <h3 className="navLink">Post</h3>
        </Link>
        <Link to="/meals">
          <h3 className="navLink">Meals</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
