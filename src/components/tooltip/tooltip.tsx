import React, { useState } from 'react'

import './tooltip.css'


interface TooltipProps {
  children: React.ReactNode
  tip: string
}
export const Tooltip = (props: TooltipProps) => {
  const { children, tip } = props
  const [visible, setVisible] = useState(false)
  const showTip = () => setVisible(true)
  const hideTip = () => setVisible(false)
  return (
    <div className="tooltip-container" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {visible && <div className="tooltip">{tip}</div>}
    </div>
  )
}
