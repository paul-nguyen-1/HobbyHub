import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HomeIcon from "@mui/icons-material/Home";

function Navbar({ search, setSearch, posts, meals }) {
  const [postsActive, setPostsActive] = useState(false);
  const [postSearch, setPostSearch] = useState(true);
  const [mealSearch, setMealSearch] = useState(false);

  const handlePostsActive = () => {
    setPostsActive(true);
  };

  const exitNavSearch = () => {
    setSearch("");
    setPostsActive(false);
  };

  const handleNavSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleHomeSearch = (event) => {
    setSearch(event.target.textContent);
    setPostsActive(false);
  };

  const handlePostSearch = () => {
    setPostSearch(true);
    setMealSearch(false);
  };

  const handleMealSearch = () => {
    setMealSearch(true);
    setPostSearch(false);
  };

  const handleCancelSearch = () => {
    setMealSearch(false);
    setPostSearch(false);
  };

  const handleHomeLogo = () => {
    setSearch("");
    setPostsActive(false);
    setPostSearch(true);
    setMealSearch(false);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={logo}
          style={{ height: "50px", width: "50px" }}
          onClick={handleHomeLogo}
        />
      </Link>
      <div className="navSearch">
        <input
          className="navInput"
          value={search}
          placeholder="&#128269; What are you looking for?"
          onChange={handleNavSearch}
          onClick={handlePostsActive}
        ></input>
        {postsActive && (
          <button className="icon" onClick={exitNavSearch}>
            <CloseIcon />
          </button>
        )}
        {postsActive && postSearch && posts && (
          <div
            className="postsNavSearch"
            style={{ height: posts.length > 5 ? "190px" : "" }}
          >
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <p
                  key={index}
                  className="postNavSearch"
                  onClick={handleHomeSearch}
                >
                  <img
                    src={post.image}
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "10px",
                    }}
                    alt=""
                  />
                  {post.title.slice(0, 23)}
                </p>
              ))
            ) : (
              <p className="postNavSearch" style={{ padding: "10px" }} onClick={exitNavSearch}>No recipes found.</p>
            )}
          </div>
        )}
        {postsActive && mealSearch && meals ? (
          <div
            className="postsNavSearch"
            style={{ height: meals && meals.length > 5 ? "180px" : "" }}
          >
            {meals.map((meal, index) => (
              <div
                key={index}
                className="postNavSearch"
                onClick={handleHomeSearch}
              >
                <img
                  src={meal.strMealThumb}
                  style={{ height: "25px", width: "25px", marginRight: "10px" }}
                  alt="No Image. Sorry :("
                />
                <p>{meal.strMeal.slice(0, 23)}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="navigation" onClick={exitNavSearch}>
        <Link to="/">
          <h3 className="navLink" onClick={handlePostSearch}>
            <HomeIcon />
          </h3>
        </Link>
        <Link to="/createPost">
          <h3 className="navLink" onClick={handleCancelSearch}>
            <ControlPointIcon />
          </h3>
        </Link>
        <Link to="/meals">
          <h3 className="navLink" onClick={handleMealSearch}>
            <MenuBookIcon />
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
