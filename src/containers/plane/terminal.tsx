import { useCallback, useEffect, useRef, useState } from "react"

import "./styles/plane.css"
import { event } from "../../common/bus"
import { Console } from "../../api/console"

interface TerminalProps {
  id: number
  selected: number
  log: Record<string, string[]>
  setLog: React.Dispatch<React.SetStateAction<Record<string, string[]>>>
}
export function Terminal(props: TerminalProps) {
  const { id, selected } = props
  const [real, setReal] = useState<boolean>(true)
  return (
    <>
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
        {real ? <RealTimeLog {...props}></RealTimeLog> : <HistoryLog id={id} selected={selected}></HistoryLog>}
      </div>
      <Command id={id} selected={selected}></Command>
    </>
  )
}

function RealTimeLog(props: TerminalProps) {
  const { id, selected, log, setLog } = props
  const ref = useRef<HTMLDivElement | null>(null)
  const key = `log_${id}_${selected}`
  useEffect(() => {
    const handleNewLog = (message: string) => {
      setLog((prevLog) => {
        const currentLog = prevLog[key] || []
        return {
          ...prevLog,
          [key]: [...currentLog, message].slice(-1000)
        }
      })
    }
    event.on(key, handleNewLog)
    return () => {
      event.off(key, handleNewLog)
    }
  }, [key])
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [key, log])
  return (
    <div className="terminal-outer">
      <div className="terminal" ref={ref}>
        {log[key]?.map((line, index) => <div key={index}>{line}</div>)}
      </div>
    </div>
  )
}

interface HistoryLogProps {
  id: number
  selected: number
}
function HistoryLog(props: HistoryLogProps) {
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
  }, [id, selected])
  useEffect(() => {
    init()
  }, [init])
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [log])
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

interface CommandProps {
  id: number
  selected: number
}
function Command(props: CommandProps) {
  const { id, selected } = props
  const run_command = async (command: string) => {
    await Console.command(id, {
      command: command,
      world_index: selected
    })
  }
  return (
    <div className="command-box">
      <div className="command-item" onClick={() => run_command("c_rollback(3)")}>
        回滚1天
      </div>
      <div className="command-item" onClick={() => run_command("c_regenerateshard()")}>
        重置世界
      </div>
      <div className="command-item" onClick={() => run_command("c_save()")}>
        保存存档
      </div>
      <div className="command-item" onClick={() => run_command("c_listallplayers()")}>
        在线玩家
      </div>
      <input
        className="command-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const target = e.target as HTMLInputElement
            run_command(target.value)
            target.value = ""
          }
        }}
        type="text"
        placeholder="输入控制台指令"
      />
    </div>
  )
}
