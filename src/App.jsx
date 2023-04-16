import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import PostID from "./pages/PostID";

function App() {
  //Layout of Routes for Application
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
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
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
