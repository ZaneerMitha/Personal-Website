import React from "react";
import { createRoot } from "react-dom/client";
import LeadershipPage from "./LeadershipPage.jsx";
import "../index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode><LeadershipPage /></React.StrictMode>,
);
