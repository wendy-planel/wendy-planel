import { useCallback, useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { event } from "../../common/bus"
import { Console } from "../../api/console"

interface TerminalProps {
  id: number
  selected: number
}
export function Terminal(props: TerminalProps) {
  const { id, selected } = props
  const [real, setReal] = useState<boolean>(true)
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
        <div
          onClick={() => {
            setReal(true)
          }}
          className="terminal-nav-item"
          style={{ color: real ? "#fff" : "#666" }}
        >
          实时日志
        </div>
        <div
          className="terminal-nav-item"
          style={{ color: real ? "#666" : "#fff" }}
          onClick={() => {
            setReal(false)
          }}
        >
          历史日志
        </div>
      </div>
      {real ? (
        <RealTimeLog id={id} selected={selected}></RealTimeLog>
      ) : (
        <HistoryLog id={id} selected={selected}></HistoryLog>
      )}
    </div>
  )
}

function RealTimeLog(props: TerminalProps) {
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
  // TODO 如果用户滚动了, 就停止自动到底部
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [log])
  return (
    <div className="terminal-outer">
      <div className="terminal" ref={ref}>
        {log.map((line, index) => {
          return <div key={index}>{line}</div>
        })}
      </div>
    </div>
  )
}

function HistoryLog(props: TerminalProps) {
  const { id, selected } = props
  const [log, setLog] = useState<string[]>([])
  const ref = useRef<HTMLDivElement | null>(null)
  const init = useCallback(async () => {
    const newLogs = await Console.tail({
      id,
      count: 1000,
      tail: 1000,
      world_index: selected
    })
    setLog(newLogs)
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [id, selected])
  useEffect(() => {init()}, [init])
  return (
    <div className="terminal-outer">
      <div className="terminal" ref={ref}>
        {log.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}
