import { useEffect, useState } from "react"

import "./styles/plane.css"

import { Card } from "./card"
import { Deploy as DeployAPI } from "../../api"
import { Deploy as DeploySchema } from "../../common/interface"

export function Plane() {
  const [deploy, setDeploy] = useState<DeploySchema[]>()
  async function loadData() {
    const _deploy = await DeployAPI.read()
    _deploy.sort((a, b) => {
      if (a.status === b.status) {
        return new Date(b.updated_at) < new Date(a.updated_at) ? 1 : -1
      } else {
        return a.status !== "running" && b.status === "running" ? 1 : -1
      }
    })
    setDeploy(_deploy)
  }
  async function onDelete(id: number) {
    await DeployAPI.delete(id)
    await loadData()
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className="plane-box">
      {deploy?.map(function (item) {
        return <Card key={item.id} deploy={item} onDelete={onDelete}></Card>
      })}
    </div>
  )
}
