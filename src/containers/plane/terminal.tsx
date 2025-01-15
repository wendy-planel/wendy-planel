import { useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { event } from "../../common/bus"



interface TerminalProps {
  id: number
  selected: number
}
export function Terminal(props: TerminalProps) {
  const { id, selected } = props
  const [log, setLog] = useState<string[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const key = `${id}_${selected}`
    const handleNewLog = (message: string) => {
      setLog((prevLog) => {
        const newLog = [...prevLog, message]
        return newLog.slice(-1000)
      })
    }
    event.on(key, handleNewLog)
    return () => {
      event.off(key, handleNewLog)
    }
  }, [id, selected])
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [log])
  return (
    <div className="terminal-box">
      <div className="terminal-nav">
        <div className="terminal-nav-item">实时日志</div>
        <div className="terminal-nav-item">历史日志</div>
      </div>
      <div className="terminal-outer">
        <div className="terminal" ref={ref}>
          {log.map((line, index) => {
            return <div key={index}>{line}</div>
          })}
        </div>
      </div>
    </div>
  )
}
