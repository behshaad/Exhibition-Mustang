import App from "../App";
import About from "../page/About";
import Home from "../page/Home";
import Contact from "../page/contact";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/Contact", element: <Contact /> },
];

export default routes;

