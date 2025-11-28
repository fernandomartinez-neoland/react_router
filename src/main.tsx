import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import SignRoute from "./routes/sing.route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignRoute />
  </StrictMode>
);
