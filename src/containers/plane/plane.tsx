import { useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { Card } from "./card"
import { TopNav } from "./nav"
import { event } from "../../common/bus"
import { HOST } from "../../common/constants"
import { Deploy as DeployAPI } from "../../api"
import { Deploy as DeploySchema } from "../../common/interface"

export function Plane() {
  const plane_box = useRef<HTMLDivElement | null>(null)
  const [deploy, setDeploy] = useState<DeploySchema[]>([])
  async function loadData() {
    const _deploy = await DeployAPI.read()
    _deploy.forEach((item) => (item._show = true))
    _deploy.sort((a, b) => {
      if (a.status === b.status) {
        return new Date(b.updated_at) < new Date(a.updated_at) ? 1 : -1
      } else {
        return a.status !== "running" && b.status === "running" ? 1 : -1
      }
    })
    setDeploy(_deploy)
  }
  const scrollTop = () => {
    if (plane_box && plane_box.current) {
      plane_box.current.scrollTop = 0
    }
  }
  useEffect(() => {
    loadData()
    const since = parseInt(Date.now() / 1000 + "") - 1800
    const source = new EventSource(`${HOST}/console/logs/follow?since=${since}`)
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
    <div>
      <TopNav deploy={deploy} scrollTop={scrollTop} setDeploy={setDeploy}></TopNav>
      <div key="1" className="plane-box" ref={plane_box}>
        {deploy.map(function (item) {
          if (item._show) {
            return <Card key={item.id} deploy={item} onDelete={onDelete}></Card>
          } else {
            return <></>
          }
        })}
      </div>
    </div>
  )
}
