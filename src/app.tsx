import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./app.css"
import { Plane } from "./containers/plane"
import { LeftNav, TopNav } from "./containers/nav"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div id="app" className="box">
      <LeftNav></LeftNav>
      <div>
        <TopNav></TopNav>
        <Plane></Plane>
      </div>
    </div>
  </StrictMode>
)
