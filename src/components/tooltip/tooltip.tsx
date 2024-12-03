import { useState, useCallback } from 'react';
import './tooltip.css';

interface TooltipProps {
  children: React.ReactNode
  tip: string
}
export const Tooltip = (props: TooltipProps) => {
  const { children, tip } = props;
  const [visible, setVisible] = useState(false);
  const showTip = useCallback(() => setVisible(true), []);
  const hideTip = useCallback(() => setVisible(false), []);
  return (
    <div className="tooltip-container" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      <div className={`tooltip ${visible ? 'visible' : ''}`}>{tip}</div>
    </div>
  );
};
