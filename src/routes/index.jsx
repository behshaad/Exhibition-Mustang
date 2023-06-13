import App from "../App";
import About from "../page/About";
import Home from "../page/Home";
import Contact from "../page/contact";
import ThemeToggle from "../components/toggle";
import Slider from "../components/ScrollToCenter";
import Nested from "../page/Swiper";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/ThemeToggle", element: <ThemeToggle /> },
  { path: "/s", element: <Slider /> },
  { path: "/Nested", element: <Nested /> },
];

export default routes;


