import "../App.css";
import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("Meals")
        .select()
        .order("created_at", { ascending: true });
      setPosts(data);
    };
    fetchPost();
  }, []);
  return (
    <div className="home">
      <div className="homeContainer">
        <p>Order by:</p>
        <button style={{ color: "white" }}>Newest</button>
        <button style={{ color: "white" }}>Most Popular</button>
      </div>
      <div className="readPosts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Post
              created={post.created_at}
              id={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              upvote={post.upvote}
            />
          ))
        ) : (
          <h2>{"Nothing to see yet 😞"}</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
