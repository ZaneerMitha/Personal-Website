import React from "react";
import { createRoot } from "react-dom/client";
import ExperiencePage from "./ExperiencePage.jsx";
import "../index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode><ExperiencePage /></React.StrictMode>,
);
