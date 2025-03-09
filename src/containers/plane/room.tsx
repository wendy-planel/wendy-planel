import { produce } from "immer"
import { saveAs } from "file-saver"
import React, { useState } from "react"

import "./styles/plane.css"
import { Deploy as DeployAPI } from "../../api"
import { HoverTip } from "../../components/tips"
import { Deploy as DeploySchema } from "../../common/interface"
import { extractFirstValidIP, isPublicIP } from "../../common/tools/ip"
import { LoadIcon, StopIcon, CopyIcon, LaunchIcon, ClickCopyIcon } from "../../common/svg"


function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  } else {
    let input = document.createElement('input')
    input.style.position = 'fixed'
    input.style.top = '-10000px'
    input.style.zIndex = '-999'
    document.body.appendChild(input)
    input.value = text
    input.focus()
    input.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(input)
    } finally {
      document.body.removeChild(input)
    }
  }
}


function getConnection(deploy: DeploySchema) {
  const password = deploy.cluster.ini.cluster_password
  const urlObj = new URL(window.location.href)
  let ip: string = urlObj.hostname
  if (isPublicIP(deploy.cluster.ini.master_ip)) {
    ip = deploy.cluster.ini.master_ip
  }
  let port = -1
  for (const world of deploy.cluster.world) {
    if (world.type === "Master") {
      port = world.server_port
      if (world.docker_api != "unix:///var/run/docker.sock") {
        const docker_ip = extractFirstValidIP(world.docker_api)
        if (docker_ip) {
          ip = docker_ip
        }
      }
      break
    }
  }
  return `c_connect("${ip}", ${port}, "${password}")`
}

interface DeployRoomProps {
  deploy: DeploySchema
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
function DeployRoom(props: DeployRoomProps) {
  const { deploy, setDeploy } = props
  const handlePort = (type: "Master" | "Caves", port: string) => {
    setDeploy(
      produce((draft) => {
        const world = []
        let flag = true
        for (const item of draft.cluster.world) {
          if (item.type === type && flag) {
            world.push({ ...item, server_port: parseInt(port) })
            flag = false
          }
        }
        draft.cluster.world = world
      })
    )
  }
  const handleClusterIniMasterIp = (master_ip: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.master_ip = master_ip
      })
    )
  }
  const handleClusterIniMasterPort = (port: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.master_port = parseInt(port)
      })
    )
  }
  const handleClusterIniMaxPlayers = (max_players: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.max_players = parseInt(max_players)
      })
    )
  }
  const handleClusterIniClusterPassword = (cluster_password: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.cluster_password = cluster_password
      })
    )
  }
  const handleClusterIniClusterName = (cluster_name: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.cluster_name = cluster_name
      })
    )
  }
  const handleClusterIniClusterDescription = (cluster_description: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.cluster_description = cluster_description
      })
    )
  }
  const handleClusterToken = (cluster_token: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.cluster_token = cluster_token
      })
    )
  }
  const handleClusterIniGameMode = (game_mode: "survival" | "endless" | "wilderness") => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.game_mode = game_mode
      })
    )
  }
  const handleClusterIniVote = (enable: boolean) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.ini.vote_enabled = enable
      })
    )
  }
  const [copyToken, setCopyToken] = useState<string>(CopyIcon)
  async function clickCopyToken() {
    await copyToClipboard(deploy.cluster.cluster_token)
    setCopyToken(ClickCopyIcon)
    setTimeout(() => {
      setCopyToken(CopyIcon)
    }, 500)
  }
  const master = deploy.cluster.world.find((e) => e.type === "Master")
  const caves = deploy.cluster.world.find((e) => e.type === 'Caves')
  return (
    <div>
      <div className="plane-card-line">
        房间:
        <input
          name="cluster_name"
          value={deploy.cluster.ini.cluster_name}
          onChange={(e) => handleClusterIniClusterName(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        描述:
        <input
          name="cluster_description"
          value={deploy.cluster.ini.cluster_description}
          onChange={(e) => handleClusterIniClusterDescription(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        密码:
        <input
          name="cluster_password"
          value={deploy.cluster.ini.cluster_password}
          onChange={(e) => handleClusterIniClusterPassword(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        人数:
        <input
          type="number"
          name="max_players"
          value={deploy.cluster.ini.max_players}
          onChange={(e) => handleClusterIniMaxPlayers(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        主机:
        <input
          name="master_ip"
          value={deploy.cluster.ini.master_ip}
          onChange={(e) => handleClusterIniMasterIp(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        主机端口:
        <input
          name="master_ip"
          value={deploy.cluster.ini.master_port == -1 ? "auto" : deploy.cluster.ini.master_port}
          onChange={(e) => handleClusterIniMasterPort(e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        森林端口:
        <input
          name="master_server_port"
          value={(!master || master.server_port == -1) ? "auto" : master?.server_port}
          onChange={(e) => handlePort("Master", e.target.value)}
        />
      </div>
      <div className="plane-card-line">
        洞穴端口:
        <input
          name="caves_server_port"
          value={(!caves || caves.server_port === -1) ? "auto" : caves?.server_port}
          onChange={(e) => handlePort("Caves", e.target.value)}
        />
      </div>
      <div className="plane-card-line copy-box">
        令牌:
        <input
          name="cluster_token"
          value={deploy.cluster.cluster_token}
          onChange={(e) => handleClusterToken(e.target.value)}
        />
        <div>
          <button
            onClick={clickCopyToken}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
            aria-label="复制"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#3498db">
              <path d={copyToken}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="plane-card-line radio-box">
        投票:
        <div className="radio-item" onClick={() => handleClusterIniVote(false)}>
          <input type="radio" readOnly={true} checked={!deploy.cluster.ini.vote_enabled} />
          <span>关闭</span>
        </div>
        <div className="radio-item" onClick={() => handleClusterIniVote(true)}>
          <input type="radio" readOnly={true} checked={deploy.cluster.ini.vote_enabled} />
          <span>开启</span>
        </div>
      </div>
      <div className="plane-card-line radio-box">
        模式:
        <div className="radio-item" onClick={() => handleClusterIniGameMode("endless")}>
          <input type="radio" readOnly={true} checked={deploy.cluster.ini.game_mode === "endless"} />
          <span>无尽</span>
        </div>
        <div className="radio-item" onClick={() => handleClusterIniGameMode("survival")}>
          <input type="radio" readOnly={true} checked={deploy.cluster.ini.game_mode === "survival"} />
          <span>生存</span>
        </div>
        <div className="radio-item" onClick={() => handleClusterIniGameMode("wilderness")}>
          <input type="radio" readOnly={true} checked={deploy.cluster.ini.game_mode === "wilderness"} />
          <span>荒野</span>
        </div>
      </div>
    </div>
  )
}

interface Stats {
  cpu: number
  memory: number
  read: string
  status: "running" | "pending" | "stop"
}
interface SystemInfoProps {
  stats: Stats
}
function SystemInfo(props: SystemInfoProps) {
  const { stats } = props
  return (
    <div className="stats-box">
      <div className="stats-box-item">
        <HoverTip tip="CPU">
          <svg viewBox="0 0 1024 1024" width="24" height="24" fill="#3498db">
            <path d="M906.26 398 906.26 337.2l-72.1 0.2 0-94.3c0-23.9-12.3-37.3-36.2-37.3l-86.9 0 0-73.8-61.5 0 0 73.8-92.4 0L557.16 132l-61.5 0-0.1 73.8L403.16 205.8l0.2-73.8-61.8 0 0.1 73.8-80.9 0c-29.7 0-41.9 13.4-41.7 44.4l-0.6 87.2-73.4 0L145.06 398l73.4 0 0 84.9-73.4-0.1 0 61.5 73.4 0.2 0 86.2-73.4 0 0 60.4 73.4 0 0 82.4c0 34 13.7 48.1 47.8 48.1l75.4 0-0.1 70.8 61.4 0 0.3-70.8 92.4 0 0 70.8 61.7 0-0.1-70.8 92.4 0-0.2 70.8 61.7 0 0.1-70.8 82.3 0c27.6 0 40.8-24.3 40.8-48.1l0-82.4 72.1 0 0-60.4L834.16 630.7l0-86.2 72.1 0 0-61.4-72.1-0.2L834.16 398 906.26 398zM772.56 760 280.06 760 280.06 267.4l492.6 0L772.66 760zM382.96 682.3l295.8 0c11.8 0 16.1-8.1 16.1-18.8L694.86 367c0-12.6-8.6-19.6-18.8-19.6L379.86 347.4c-15.4 0-19.9 5.7-19.9 21.2l0 290.6C359.96 674.6 367.56 682.3 382.96 682.3z"></path>
          </svg>
        </HoverTip>
        <div className="stats-box-text">{stats.cpu}%</div>
      </div>
      <div className="stats-box-item">
        <HoverTip tip="内存">
          <svg viewBox="0 0 1024 1024" width="24" height="24" fill="#3498db">
            <path d="M922.688 810.624h-149.312a37.376 37.376 0 0 1-37.312-37.376L736 736h-49.792v74.688H611.584V736h-49.792v74.688H462.208V736h-49.728v74.688H337.792V736H288l-0.256 37.248a37.312 37.312 0 0 1-37.312 37.376h-149.12A37.312 37.312 0 0 1 64 773.248V250.752c0-20.672 16.704-37.376 37.312-37.376h821.312a37.312 37.312 0 0 1 37.376 37.376v522.496a37.312 37.312 0 0 1-37.312 37.376z m-37.376-177.344h-39.168a37.376 37.376 0 0 1 0-74.752h39.168V288.128H138.688v270.4h37.952a37.376 37.376 0 0 1 0 74.752h-37.952v102.528H213.12l0.256-49.6c0-20.672 4.288-24.896 24.896-24.896h547.584c20.608 0 24.896 4.224 24.896 24.896v49.6h74.624V633.28zM736 337.792h74.688V512H736V337.792z m-174.208 0h74.688V512H561.792V337.792z m-174.208 0h74.688V512H387.584V337.792z m-174.272 0H288V512l-73.472-0.128-1.216-174.08z"></path>
          </svg>
        </HoverTip>
        <div className="stats-box-text">{stats.memory}%</div>
      </div>
      <div className="stats-box-item">
        <div className="stats-box-text">{stats.status == "running" ? "运行中" : "已停止"}</div>
        <svg viewBox="0 0 1024 1024" width="18" height="18" fill={stats.status == "running" ? "#00ff00" : "#ff0000"}>
          <path d="M514.048 128q79.872 0 149.504 30.208t121.856 82.432 82.432 122.368 30.208 150.016q0 78.848-30.208 148.48t-82.432 121.856-121.856 82.432-149.504 30.208-149.504-30.208-121.856-82.432-82.432-121.856-30.208-148.48q0-79.872 30.208-150.016t82.432-122.368 121.856-82.432 149.504-30.208z"></path>
        </svg>
      </div>
    </div>
  )
}

interface ButtonProps {
  tip: string
  children: React.ReactNode
  load: boolean
  load_tip: string
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined
}
function Button(props: ButtonProps) {
  const { tip, children, load, load_tip, onClick, onMouseLeave } = props
  return (
    <div className="buttons-box-item" onClick={onClick} onMouseLeave={onMouseLeave}>
      {load ? (
        <HoverTip tip={load_tip}>
          <svg fill="#3498db" viewBox="0 0 1024 1024" width="27" height="27">
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
        </HoverTip>
      ) : (
        <HoverTip tip={tip}>
          <svg fill="#3498db" viewBox="0 0 1024 1024" width="27" height="27">
            {children}
          </svg>
        </HoverTip>
      )}
    </div>
  )
}

interface ButtonBoxStates {
  deleting: boolean
  downloading: boolean
  deploying: boolean
}
interface ButtonBoxProps {
  deploy: DeploySchema
  onDelete: (id: number) => void
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
function ButtonBox(props: ButtonBoxProps) {
  const { deploy, onDelete, setDeploy } = props
  const [shareTip, setShareTip] = useState("分享")
  const [states, setStates] = useState<ButtonBoxStates>({
    deleting: false,
    downloading: false,
    deploying: false,
  })

  async function handleShare() {
    let text = ""
    text = text + `房间: ${deploy.cluster.ini.cluster_name}\n`
    text = text + `玩家: ${deploy.cluster.ini.max_players}\n`
    text = text + `密码: ${deploy.cluster.ini.cluster_password}\n`
    text = text + `描述: ${deploy.cluster.ini.cluster_description}\n`
    text = text + `直连: ${getConnection(deploy)}\n`
    await copyToClipboard(text)
    setShareTip("已复制")
  }
  async function clickDelete() {
    setStates({
      ...states,
      deleting: true
    })
    onDelete(deploy.id)
  }
  async function clickDownload() {
    setStates({
      ...states,
      downloading: true
    })
    try {
      const response = await DeployAPI.download(deploy.id)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      let blob: Blob
      if (response.body) {
        const reader = response.body.getReader()
        const stream = new ReadableStream({
          start(controller) {
            function read() {
              reader
                .read()
                .then(({ done, value }) => {
                  if (done) {
                    controller.close()
                    return
                  }
                  controller.enqueue(value)
                  read()
                })
                .catch((err) => {
                  controller.error(err)
                })
            }
            read()
          }
        })
        blob = await new Response(stream).blob()
      } else {
        blob = await response.blob()
      }
      saveAs(blob, "archive.tar")
    } catch (error) {
      console.error("Download error:", error)
    }
    setStates({
      ...states,
      downloading: false
    })
  }
  async function clickRun() {
    setStates({
      ...states,
      deploying: true
    })
    const _deploy = await DeployAPI.update(deploy.id, deploy)
    setDeploy(
      produce((draft) => {
        if (draft.id === _deploy.id) {
          Object.assign(draft, _deploy)
        }
      })
    )
    if (deploy.status === "running") {
      await DeployAPI.stop(deploy.id)
      setDeploy(
        produce((draft) => {
          draft.status = "stop"
        })
      )
    } else {
      await DeployAPI.restart(deploy.id)
      setDeploy(
        produce((draft) => {
          draft.status = "running"
        })
      )
    }
    setStates({
      ...states,
      deploying: false
    })
  }
  return (
    <div className="buttons-box">
      <Button
        tip={shareTip}
        load={false}
        load_tip={shareTip}
        onClick={handleShare}
        onMouseLeave={() => {
          setShareTip("分享")
        }}
      >
        <path d="M1016.1904 93.352c-7.7152-8.776-19.96-12.7344-31.7152-9.552L23.1664 343.5216c-11.3072 3.0608-19.8992 12.0816-22.4288 23.5104-2.5104 11.4288 1.4896 23.2256 10.4704 30.776L239.008 589.1184l104.5536 290.456c4.1232 11.3872 14.552 19.4704 26.4704 20.5712l3.1232 0.1632c10.96 0 21.2448-5.8784 26.8576-15.3472l63.0016-106.2064 181.2496 154.984c5.632 4.8576 12.8976 7.552 20.368 7.552 2.6944 0 5.1424-0.2864 7.3056-0.8576 9.7152-2.3264 17.8368-9.224 21.7152-18.5312l327.968-795.856C1026.192 115.1072 1024.0688 102.2496 1016.1904 93.352zM617.0784 426.992l-119.6976 158.7792c-5.0608 6.6944-7.2048 14.9392-6.0416 23.2256 1.1632 8.2864 5.4896 15.6336 12.2048 20.736 13.3264 10 33.8176 7.1024 43.8784-6.2048L745.8992 360.256c8.7344-11.6736 8.368-27.6336-0.8576-38.736-9.0608-11.0208-25.3072-14.5312-37.96-8.2864l-439.44 214.6576c-0.8368 0.408-1.632 0.8576-2.4288 1.3472L97.4736 388.3792l841.9792-227.4336L652.1408 858.024l-176.6976-151.1472c-5.6736-4.816-12.9184-7.5104-20.3888-7.5104-1.6128 0-3.2448 0.1632-5.1424 0.4496-9.1424 1.5104-17.1024 6.9792-21.7968 14.8976l-48.0832 81.0224-77.4304-215.1488L617.0784 426.992z"></path>
      </Button>
      <Button tip="下载" load={states.downloading} load_tip="下载中" onClick={clickDownload}>
        <path
          d="M808.192 246.528a320.16 320.16 0 0 0-592.352 0A238.592 238.592 0 0 0 32 479.936c0 132.352 107.648 240 240 240h91.488a32 32 0 1 0 0-64H272a176.192 176.192 0 0 1-176-176 175.04 175.04 0 0 1 148.48-173.888l19.04-2.976 6.24-18.24C305.248 181.408 402.592 111.936 512 111.936a256 256 0 0 1 242.208 172.896l6.272 18.24 19.04 2.976A175.04 175.04 0 0 1 928 479.936c0 97.024-78.976 176-176 176h-97.28a32 32 0 1 0 0 64h97.28c132.352 0 240-107.648 240-240a238.592 238.592 0 0 0-183.808-233.408z"
          p-id="2434"
        ></path>
        <path d="M649.792 789.888L544 876.48V447.936a32 32 0 0 0-64 0V876.48l-106.752-87.424a31.968 31.968 0 1 0-40.544 49.504l159.04 130.24a32 32 0 0 0 40.576 0l158.048-129.44a32 32 0 1 0-40.576-49.472z"></path>
      </Button>
      <Button tip="删除" load={states.deleting} load_tip="删除中" onClick={clickDelete}>
        <path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z"></path>
        <path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z"></path>
        <path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z"></path>
        <path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z"></path>
      </Button>
      <Button
        tip={deploy.status == "running" ? "停止" : "启动"}
        load={states.deploying}
        load_tip={deploy.status == "running" ? "启动中" : "停止中"}
        onClick={clickRun}
      >
        <path d={deploy.status == "running" ? StopIcon : LaunchIcon}></path>
      </Button>
    </div>
  )
}

interface RoomProps {
  deploy: DeploySchema
  onDelete: (id: number) => void
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
export function Room(props: RoomProps) {
  const { deploy, onDelete, setDeploy } = props
  const stats = {
    cpu: 18.09,
    memory: 40.23,
    read: "2015-01-08T22:57:31.547920715Z",
    status: deploy.status
  }
  return (
    <div className="plane-card-room">
      <DeployRoom deploy={deploy} setDeploy={setDeploy}></DeployRoom>
      <SystemInfo stats={stats}></SystemInfo>
      <ButtonBox deploy={deploy} setDeploy={setDeploy} onDelete={onDelete}></ButtonBox>
    </div>
  )
}
