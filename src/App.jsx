import { useRoutes } from "react-router";
import routes from "./routes";
import Navbar from "./components/navbar";
import MySidebar from "./components/Sidebar";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="h-screen overflow-hidden">
      {/* <Navbar /> */}
      <MySidebar />
      {router}
    </div>
  );
}

export default App;
