import { useRoutes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import PostID from "./pages/PostID";

function App() {
  const [search, setSearch] = useState("");
  //Layout of Routes for Application
  let routes = useRoutes([
    {
      path: "/",
      element: <Home search={search} />,
    },
    {
      path: "/createPost",
      element: <CreatePost />,
    },
    {
      path: "/post/:id",
      element: <PostID />,
    },
  ]);

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      {routes}
    </div>
  );
}

export default App;
