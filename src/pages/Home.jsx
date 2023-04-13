import React from "react";
import "../App.css";
import Post from "../components/Post";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <p>Order by:</p>
        <button style={{ color: "white" }}>Newest</button>
        <button style={{ color: "white" }}>Most Popular</button>
      </div>
      <Post />
    </div>
  );
}

export default Home;
