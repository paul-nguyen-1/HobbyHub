import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

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
  ]);

  return (
    <div className="App">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
