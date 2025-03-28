import { useEffect, useRef, useState, useCallback, useMemo } from "react"

import "./styles/plane.css"
import { Card } from "./card"
import { TopNav } from "./nav"
import { event } from "../../common/bus"
import { HOST } from "../../common/constants"
import { Deploy as DeployAPI } from "../../api"
import { Deploy as DeploySchema } from "../../common/interface"

export function Plane() {
  const plane = useRef<HTMLDivElement | null>(null)
  const [deploy, setDeploy] = useState<DeploySchema[]>([])
  const loadData = useCallback(async () => {
    const _deploy = await DeployAPI.read()
    const updatedDeploy = _deploy
      .map((item) => ({ ...item, _show: true }))
      .sort((a, b) => {
        if (a.status === b.status) {
          return new Date(b.updated_at) < new Date(a.updated_at) ? -1 : 1
        } else {
          return a.status !== "running" && b.status === "running" ? 1 : -1
        }
      })
    setDeploy(updatedDeploy)
  }, [])
  const scrollTop = useCallback(() => {
    plane.current?.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  const onDelete = useCallback(
    async (id: number) => {
      await DeployAPI.delete(id)
      await loadData()
    },
    [loadData]
  )
  useEffect(() => {
    loadData()
    const since = Math.floor(Date.now() / 1000) - 1800
    const sources = [
      new EventSource(`${HOST}/console/logs/follow?since=${since}`),
      new EventSource(`${HOST}/stats?interval=5`)
    ]
    for (const source of sources) {
      source.onmessage = (message) => {
        const { key, data } = JSON.parse(message.data)
        event.emit(key, data)
      }
      source.onerror = () => {
        source.close()
      }
    }
    return () => {
      for (const source of sources) {
        source.close()
      }
    }
  }, [loadData])
  const visibleDeploy = useMemo(() => deploy.filter((item) => item._show), [deploy])
  return (
    <div>
      <TopNav deploy={deploy} scrollTop={scrollTop} setDeploy={setDeploy} />
      <div
        key="1"
        className="plane-box"
        ref={plane}
        style={{
          transition: "opacity 0.3s ease-in-out",
          opacity: visibleDeploy.length ? 1 : 0
        }}
      >
        {visibleDeploy.map((item) => (
          <Card key={item.id} deploy={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}
