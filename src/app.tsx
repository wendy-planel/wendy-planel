import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./app.css"
import { Plane } from "./containers/plane"
import { LeftNav } from "./containers/nav"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div id="app" className="box">
      <LeftNav></LeftNav>
      <Plane></Plane>
    </div>
  </StrictMode>
)
