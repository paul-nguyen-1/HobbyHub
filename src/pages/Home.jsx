import "../App.css";
import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import Post from "../components/Post";
import gif from '../assets/loading.gif'

function Home({ search }) {
  const [posts, setPosts] = useState([]);
  const [newest, setNewest] = useState(null);
  const [popular, setPopular] = useState(null);
  const [eventChoice, setEventChoice] = useState(null);

  const newOrder = newest ? { ascending: false } : { ascending: true };
  const newPopular = popular ? { ascending: false } : { ascending: true };
  const orderChoice = eventChoice ? newOrder : newPopular;
  const tableChoice = eventChoice ? "created_at" : "upvote";

  useEffect(() => {
    const fetchPostCreated = async () => {
      const { data } = await supabase
        .from("Meals")
        .select()
        .order(tableChoice, orderChoice)
        .ilike("title", `%${search}%`);
      setPosts(data);
    };
    fetchPostCreated();
  }, [eventChoice, newest, popular, search]);

  const handleNewest = () => {
    setNewest(!newest);
    setEventChoice(true);
  };

  const handlePopularity = () => {
    setPopular(!popular);
    setEventChoice(false);
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <p>Order by:</p>
        <button className="homeButton" style={{backgroundColor:"#744210"}} onClick={handleNewest}>
          {newest ? "Latest" : "Oldest"}
        </button>
        <button className="homeButton" style={{backgroundColor:"#ECC94B"}} onClick={handlePopularity}>
          {popular ? "Most Popular" : "Least Popular"}
        </button>
      </div>
      <div className="readPosts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Post
              key={index}
              created={post.created_at}
              id={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              upvote={post.upvote}
            />
          ))
        ) : (
          <img
            src={gif}
            style={{ height: "150px", width: "150px", padding: "50px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
