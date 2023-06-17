import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "./locales/i18n.js";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { NextUIProvider } from "@nextui-org/react";
// import { DartThemeProvider } from "./components/DarkThemeContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        {/* <DartThemeProvider> */}
          <App />
        {/* </DartThemeProvider> */}
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
