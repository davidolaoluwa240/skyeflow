// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { BrowserRouter } from "react-router-dom";
import App from "./app/app.components";

// Style
import "./assets/sass/main.scss";

// Mount React To Dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
