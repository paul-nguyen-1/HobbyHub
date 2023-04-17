import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({search, setSearch}) {
  return (
    <div className="navbar">
      <Link to="/" style={{ color: "black" }}>
        <h1>MealHub</h1>
      </Link>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <div className="navigation">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/createPost">
          <button>Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
