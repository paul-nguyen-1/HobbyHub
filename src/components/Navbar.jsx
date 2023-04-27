import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HomeIcon from "@mui/icons-material/Home";

function Navbar({ search, setSearch }) {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={logo}
          style={{ height: "50px", width: "50px" }}
          onClick={() => setSearch("")}
        />
      </Link>
      <div className="navSearch">
        <input
          className="navInput"
          value={search}
          placeholder="&#128269; What are you looking for?"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {search && (
          <button className="icon" onClick={() => setSearch("")}>
            <CloseIcon />
          </button>
        )}
      </div>
      <div className="navigation" onClick={() => setSearch("")}>
        <Link to="/">
          <h3 className="navLink">
            <HomeIcon />
          </h3>
        </Link>
        <Link to="/createPost">
          <h3 className="navLink">
            <ControlPointIcon />
          </h3>
        </Link>
        <Link to="/meals">
          <h3 className="navLink">
            <MenuBookIcon />
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
