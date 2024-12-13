import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { LeftNav, TopNav } from "./containers/nav";
import { Plane } from "./containers/plane";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="box">
      <LeftNav></LeftNav>
      <div>
        <TopNav></TopNav>
        <Plane></Plane>
      </div>
    </div>
  </StrictMode>
);
