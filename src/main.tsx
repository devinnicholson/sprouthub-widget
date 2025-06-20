import React from "react";
import ReactDOM from "react-dom/client";
import Embed from "./Embed";
import "./theme.css";

import { initializeTheme } from "./theme";
initializeTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Embed />
  </React.StrictMode>
);