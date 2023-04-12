import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  //Layout of Routes for Application
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
    <div className="App">
    <>

      <Navbar />
    </>
      {routes}
    </div>
  );
}

export default App;
