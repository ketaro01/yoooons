import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioPage } from "./pages/PortfolioPage";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
);
