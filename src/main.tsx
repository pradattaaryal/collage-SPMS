import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
 import TodoRepositoryProvider from "./core/application/provider/TodoRepositoryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoRepositoryProvider>   
      <App />
  </TodoRepositoryProvider>
  </StrictMode>
);
