import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap";

import "./assets/scss/main.scss";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
