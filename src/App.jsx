import { useRoutes } from "react-router";
import routes from "./routes";
import Home from "./page/Home";
function App() {
  // let router = useRoutes(routes);

  return (
    <>
      <Home />
      {/* {router} */}
    </>
  );
}

export default App;
