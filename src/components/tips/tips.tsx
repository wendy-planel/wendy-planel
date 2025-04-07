import { useState, useCallback } from "react"

import "./tips.css"

interface HoverTipProps {
  children: React.ReactNode
  tip: string
}
export const HoverTip = (props: HoverTipProps) => {
  const { children, tip } = props
  const [visible, setVisible] = useState<boolean>(false)
  const showTip = useCallback(() => setVisible(true), [])
  const hideTip = useCallback(() => setVisible(false), [])
  return (
    <div className="hovertip-container" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {visible && <div className="hovertip">{tip}</div>}
    </div>
  )
}
