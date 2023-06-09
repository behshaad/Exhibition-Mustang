import { useRoutes } from "react-router";
import routes from "./routes";
import Navbar from "./components/navbar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Navbar />

      {router}
    </>
  );
}

export default App;
