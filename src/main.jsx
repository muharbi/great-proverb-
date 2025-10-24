import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors.scss";
import "./styles/reset.scss";
import App from "./App.jsx";
import "./global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
