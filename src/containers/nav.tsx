import './styles/nav.css'
import { GitHubIcon } from '../common/svg'
import { LeftMenu, MenuItem } from "../components/menu"


export function LeftNav() {
  return (
    <LeftMenu current={2}>
      <div className="left-nav-title">温蒂面板</div>
      <img className="left-nav-avatar" src="./assets/images/wendy.png"></img>
      <MenuItem>
        <div>
          <img className="left-nav-icon" src="./assets/images/flysheet.png"></img>
          <div>面板信息</div>
        </div>
      </MenuItem>
      <MenuItem>
        <div>
          <img className="left-nav-icon" src="./assets/images/portabletent.png"></img>
          <div>大厅查询</div>
        </div>
      </MenuItem>
    </LeftMenu>
  )
}


export function TopNav() {
  return (
    <div className="top-nav-box">
      <div className="top-nav-item">
        <a href="https://github.com/" target="_blank">
          <svg
            className="top-nav-github-svg"
            width="32"
            height="32"
            aria-hidden="true"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <path d={GitHubIcon}></path>
          </svg>
        </a>
      </div>
    </div>
  )
}