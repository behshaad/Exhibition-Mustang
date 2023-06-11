import { useRoutes } from "react-router";
import routes from "./routes";
import Navbar from "./components/navbar";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
// !??????????????????????????????????????????/
// *main app scroll center
// import React from 'react';
// import ScrollToCenter from './components/ScrollToCenter';

// const App = () => {
//   return (
//     <ScrollToCenter/>
//   );
// };

// export default App;

// *main app scroll center

// *main app scroll center
