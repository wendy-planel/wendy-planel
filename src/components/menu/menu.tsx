/**
 * 菜单导航组件
 * 
 * 左菜单组件
 * 包含菜单项
 * 菜单图标 菜单点击
 * 
 */
import React, { useState } from 'react'

import './menu.css'


interface LeftMenuProps {
  current?: number
  children?: React.ReactNode
}
export function LeftMenu(props: LeftMenuProps) {
  const { current = 0, children } = props
  const [selected, setSelected] = useState(current)
  // 处理子节点点击事件
  const handleChildOnClick = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>,
    childOnClick?: React.MouseEventHandler<HTMLDivElement>
  ) => {
    // 点击时候选择，并且触发点击事件
    setSelected(index)
    if (childOnClick) {
      childOnClick(event)
    }
  }
  return (
    <div className="sidebar">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === MenuItem) {
          const childProps = {
            index: index,
            current: selected,
            onClick: (event: React.MouseEvent<HTMLDivElement>) => handleChildOnClick(index, event, child.props.onClick)
          }
          return React.cloneElement(child, childProps)
        }
        return child
      })}
    </div>
  )
}


interface MenuItemProps {
  index?: number | undefined,
  current?: number | undefined,
  className?: string | undefined
  children?: string | undefined | React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
export function MenuItem(props: MenuItemProps) {
  const { index, current, className, children = '', onClick } = props
  const innerClassName = index != undefined && index == current ? 'menu-item menu-item-selected' : 'menu-item'
  const mergeClassName = className ? className + ' ' + innerClassName : innerClassName
  return (
    <div className={mergeClassName} onClick={onClick}>
      <div>{children}</div>
    </div>
  )
}