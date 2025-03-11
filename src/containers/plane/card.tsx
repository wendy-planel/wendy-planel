import { useState } from "react"

import "./styles/plane.css"
import { Room } from "./room"
import { ModBox } from "./mod"
import { World } from "./world"
import { Deploy as DeploySchema } from "../../common/interface"

interface CardProps {
  deploy: DeploySchema
  onDelete: (id: number) => void
}
export function Card(props: CardProps) {
  const [deploy, setDeploy] = useState<DeploySchema>(props.deploy)
  const [selected, setSelected] = useState<number>(0)
  return (
    <div className="plane-card">
      <Room
        {...{
          deploy: deploy,
          onDelete: props.onDelete,
          setDeploy: setDeploy,
          selected: selected
        }}
      ></Room>
      <ModBox {...{ deploy: deploy, setDeploy: setDeploy }}></ModBox>
      <World {...{ deploy: deploy, setDeploy: setDeploy, selected: selected, setSelected: setSelected }}></World>
    </div>
  )
}
