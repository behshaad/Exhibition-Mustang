import { useRoutes } from "react-router";
import routes from "./routes";
function App() {
  let router = useRoutes(routes);

  return <>{router}</>;
}

export default App;
