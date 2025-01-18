import "./styles/nav.css"
import { LeftMenu, MenuItem } from "../components/menu"

export function LeftNav() {
  return (
    <LeftMenu current={2}>
      <div className="left-nav-title">温蒂面板</div>
      <div className="left-nav-avatar">
        <img src="/assets/images/wendy.png"></img>
      </div>
      <MenuItem>
        <div>
          <img className="left-nav-icon" src="/assets/images/flysheet.png"></img>
          <div>面板信息</div>
        </div>
      </MenuItem>
      <MenuItem>
        <div>
          <img className="left-nav-icon" src="/assets/images/portabletent.png"></img>
          <div>大厅查询</div>
        </div>
      </MenuItem>
    </LeftMenu>
  )
}
