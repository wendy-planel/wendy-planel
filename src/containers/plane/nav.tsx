import { useState } from "react"

import "./styles/plane.css"
import { HOST } from "../../common/constants"
import { Deploy as DeployAPI } from "../../api"
import { GitHubIcon, LoadIcon } from "../../common/svg"

import { DeployCreateDefault } from "../../common/constants"
import { Deploy as DeploySchema } from "../../common/interface"

interface TopNavProps {
  deploy: DeploySchema[]
  scrollTop: () => void
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema[]>>
}
export function TopNav(props: TopNavProps) {
  const { deploy, scrollTop, setDeploy } = props
  return (
    <div className="top-nav-box">
      <Search deploy={deploy} scrollTop={scrollTop} setDeploy={setDeploy}></Search>
      <Create deploy={deploy} scrollTop={scrollTop} setDeploy={setDeploy}></Create>
      <Upload deploy={deploy} scrollTop={scrollTop} setDeploy={setDeploy}></Upload>
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

function Upload(props: TopNavProps) {
  const { deploy, scrollTop, setDeploy } = props
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div
      onClick={() => document.getElementById("file-input")?.click()}
      className="top-nav-button"
      style={{ marginRight: "2rem" }}
    >
      {visible && (
        <svg fill="#3498db" viewBox="0 0 1024 1024" width="15" height="15">
          <path d={LoadIcon}>
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 512 512"
              to="360 512 512"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
      上传存档
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={async (e) => {
          if (e && e.target && e.target.files) {
            const file = e.target.files[0]
            const form = new FormData()
            form.append("file", file)
            const api = `${HOST}/deploy/upload`
            setVisible(true)
            const response = await fetch(api, {
              method: "POST",
              body: form
            })
            setVisible(false)
            if (response.ok) {
              const item = (await response.json()) as DeploySchema
              item._show = true
              setDeploy([item, ...deploy])
            }
            scrollTop()
          }
        }}
      />
    </div>
  )
}

function Create(props: TopNavProps) {
  const { deploy, scrollTop, setDeploy } = props
  return (
    <div
      onClick={async () => {
        const item = await DeployAPI.create(DeployCreateDefault)
        item._show = true
        setDeploy([item, ...deploy])
        scrollTop()
      }}
      className="top-nav-button"
    >
      创建
    </div>
  )
}

function Search(props: TopNavProps) {
  const { deploy, setDeploy } = props
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const target = e.target as HTMLInputElement
          const keyword = target.value
          const _deploy = []
          if (keyword) {
            for (const item of deploy) {
              item._show = item.cluster.ini.cluster_name.toLowerCase().includes(keyword.toLowerCase())
              _deploy.push(item)
            }
          } else {
            for (const item of deploy) {
              item._show = true
              _deploy.push(item)
            }
          }
          setDeploy(_deploy)
        }
      }}
      className="nav-top-input"
      placeholder="搜索房间"
    />
  )
}
