import { useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { HOST } from "../../common/constants"

interface TerminalProps {
  id: number
  selected: number
}
export function Terminal(props: TerminalProps) {
  const { id, selected } = props
  const [log, setLog] = useState<string[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const source = new EventSource(`${HOST}/console/logs/follow/${id}?world_index=${selected}`)
    source.onmessage = (event) => {
      setLog((prev) => {
        prev.push(event.data)
        return prev.slice(-1000)
      })
      if (ref && ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight
      }
    }
    source.onerror = () => {
      source.close()
    }
    return () => {
      setLog([])
      source.close()
    }
  }, [id, selected])
  return (
    <div className="terminal-box">
      <div className="terminal" ref={ref}>
        {log.map((line, index) => {
          return <div key={index}>{line}</div>
        })}
      </div>
      <div className="terminal-nav">
        <div className="terminal-nav-item">实时日志</div>
        <div className="terminal-nav-item">历史日志</div>
      </div>
    </div>
  )
}
