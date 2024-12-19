import { useState } from "react"

import "./styles/plane.css"
import { Room } from "./room"
import { ModBox } from "./mod"
import { Deploy as DeploySchema } from "../../common/interface"

interface CardProps {
  deploy: DeploySchema
  onDelete: (id: number) => void
}
export function Card(props: CardProps) {
  const [deploy, setDeploy] = useState<DeploySchema>(props.deploy)
  return (
    <div className="plane-card">
      <Room deploy={deploy} onDelete={props.onDelete} setDeploy={setDeploy}></Room>
      <ModBox deploy={deploy} setDeploy={setDeploy}></ModBox>
    </div>
  )
}
