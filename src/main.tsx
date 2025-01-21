import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Providers from "./core/application/Providers.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
 <StrictMode>
    <Providers>
      <App />
      </Providers>
   </StrictMode>
   </BrowserRouter>
);
