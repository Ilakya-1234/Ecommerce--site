import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvier from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <AppContextProvier>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvier>
);
