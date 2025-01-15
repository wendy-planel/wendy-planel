import { useEffect, useState } from "react"

import "./styles/plane.css"
import { Card } from "./card"
import { event } from "../../common/bus"
import { HOST } from "../../common/constants"
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
  useEffect(() => {
    loadData()
    const source = new EventSource(`${HOST}/console/logs/follow?since=0`)
    source.onmessage = (message) => {
      const { key, line } = JSON.parse(message.data)
      event.emit(key, line)
    }
    source.onerror = () => {
      source.close()
    }
    return () => {
      source.close()
    }
  }, [])
  async function onDelete(id: number) {
    await DeployAPI.delete(id)
    await loadData()
  }

  return (
    <div className="plane-box">
      {deploy?.map(function (item) {
        return <Card key={item.id} deploy={item} onDelete={onDelete}></Card>
      })}
    </div>
  )
}
