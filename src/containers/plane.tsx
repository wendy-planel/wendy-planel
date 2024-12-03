import { ChangeEvent, useEffect, useState } from 'react'

import './styles/plane.css'
import { Tooltip } from "../components/tooltip"
import { Deploy, DeployClusterIni } from '../common/interface'
import { isPublicIP, extractFirstValidIP } from '../common/tools'
import {
  readDeploy,
  deleteDeploy,
} from '../api'
import {
  CpuIcon,
  LoadIcon,
  StopIcon,
  CopyIcon,
  ShareIcon,
  MemoryIcon,
  LaunchIcon,
  DownloadIcon,
  PolkaDotIcon,
  ClickCopyIcon,
} from '../common/svg'


function getConnection(deploy: Deploy) {
  const port = deploy.cluster.ini.master_port
  const password = deploy.cluster.ini.cluster_password
  const urlObj = new URL(window.location.href)
  let ip: string = urlObj.hostname
  if (isPublicIP(deploy.cluster.ini.master_ip)) {
    ip = deploy.cluster.ini.master_ip
  }
  for (const world of deploy.cluster.world) {
    if (world.type === 'Master' && world.docker_api != 'unix:///var/run/docker.sock') {
      const docker_ip = extractFirstValidIP(world.docker_api)
      if (docker_ip) {
        ip = docker_ip
        break
      }
    }
  }
  return `c_connect("${ip}", ${port}, "${password}")`
}


export function Plane() {
  const [deploy, setDeploy] = useState<[Deploy]>()
  async function loadData() {
    const data = await readDeploy()
    data.sort((a, b) => {
      if (a.status === b.status) {
        return new Date(b.updated_at) < new Date(a.updated_at) ? 1 : -1
      } else {
        return a.status !== 'running' && b.status === 'running' ? 1 : -1
      }
    })
    setDeploy(data)
  }
  // 删除部署
  async function handleDelete(id: number) {
    await deleteDeploy(id)
    await loadData()
  }
  useEffect(() => { loadData() }, [])
  return (
    <div className='plane-box'>
      {
        deploy?.map(function (item) {
          return <PlaneDeploy
            key={item.id}
            deploy={item}
            onDelete={handleDelete}
          >
          </PlaneDeploy>
        })
      }
    </div>
  )
}

interface PlaneDeployProps {
  deploy: Deploy
  onDelete: (id: number) => void
}
function PlaneDeploy(props: PlaneDeployProps) {
  const { deploy, onDelete } = props
  const stats: Stats = {
    cpu: 18.09,
    memory: 40.23,
    read: '2015-01-08T22:57:31.547920715Z',
    status: deploy.status
  }
  return (
    <div className='plane-card'>
      <div className='plane-card-room'>
        <PlaneDeployRoom deploy={deploy}></PlaneDeployRoom>
        <PlaneSystemStatus stats={stats}></PlaneSystemStatus>
        <Buttons deploy={deploy} onDelete={onDelete}></Buttons>
      </div>
      <Mods deploy={deploy}></Mods>
    </div>
  )
}


interface PlaneDeployRoomProps {
  deploy: Deploy
}
function PlaneDeployRoom(props: PlaneDeployRoomProps) {
  const { deploy } = props
  const [clusterIni, setClusterIni] = useState<DeployClusterIni>(deploy.cluster.ini)
  const [clusterToken, setClusterToken] = useState<string>(deploy.cluster.cluster_token)
  const handleClusterIniChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClusterIni({
      ...clusterIni,
      [event.target.name]: event.target.value
    })
  }
  const handleClusterIniGameMode = (gameMode: "survival" | "endless" | "wilderness") => {
    setClusterIni({
      ...clusterIni,
      game_mode: gameMode
    })
  }
  const handleClusterIniPvp = (enable: boolean) => {
    setClusterIni({
      ...clusterIni,
      pvp: enable
    })
  }
  const handleClusterIniVote = (enable: boolean) => {
    setClusterIni({
      ...clusterIni,
      vote_enabled: enable
    })
  }
  const [copyPath, setCopyPath] = useState<string>(CopyIcon)
  async function clickCopyButton() {
    await navigator.clipboard.writeText(getConnection(deploy))
    setCopyPath(ClickCopyIcon)
    setTimeout(() => {
      setCopyPath(CopyIcon)
    }, 500)
  }
  return (
    <div>
      <div className='plane-card-line'>
        房间:
        <input
          name='cluster_name'
          value={clusterIni.cluster_name}
          onChange={handleClusterIniChange} />
      </div>
      <div className='plane-card-line'>
        描述:
        <input
          name='cluster_description'
          value={clusterIni.cluster_description}
          onChange={handleClusterIniChange} />
      </div>
      <div className='plane-card-line'>
        密码:
        <input
          name='cluster_password'
          value={clusterIni.cluster_password}
          onChange={handleClusterIniChange}
        />
      </div>
      <div className='plane-card-line'>
        人数:
        <input
          type='number'
          name='max_players'
          value={clusterIni.max_players}
          onChange={handleClusterIniChange}
        />
      </div>
      <div className='plane-card-line radio-box'>
        模式:
        <div className='radio-item' onClick={() => handleClusterIniGameMode('endless')}>
          <input
            type='radio'
            readOnly={true}
            checked={clusterIni.game_mode === 'endless'}
          />
          <span>无尽</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniGameMode('survival')}>
          <input
            type='radio'
            readOnly={true}
            checked={clusterIni.game_mode === 'survival'}
          />
          <span>生存</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniGameMode('wilderness')}>
          <input
            type='radio'
            readOnly={true}
            checked={clusterIni.game_mode === 'wilderness'}
          />
          <span>荒野</span>
        </div>
      </div>
      <div className='plane-card-line radio-box'>
        PVP:
        <div className='radio-item' onClick={() => handleClusterIniPvp(false)}>
          <input
            type='radio'
            readOnly={true}
            checked={!clusterIni.pvp}
          />
          <span>关闭</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniPvp(true)}>
          <input
            type='radio'
            readOnly={true}
            checked={clusterIni.pvp}
          />
          <span>开启</span>
        </div>
      </div>
      <div className='plane-card-line radio-box'>
        投票:
        <div className='radio-item' onClick={() => handleClusterIniVote(false)}>
          <input
            type='radio'
            readOnly={true}
            checked={!clusterIni.vote_enabled}
          />
          <span>关闭</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniVote(true)}>
          <input
            type='radio'
            readOnly={true}
            checked={clusterIni.vote_enabled}
          />
          <span>开启</span>
        </div>
      </div>
      <div className='plane-card-line'>
        主机:
        <input
          name='master_ip'
          value={clusterIni.master_ip}
          onChange={handleClusterIniChange}
        />
      </div>
      <div className='plane-card-line'>
        端口:
        <input
          name='master_port'
          value={clusterIni.master_port}
          onChange={handleClusterIniChange}
        />
      </div>
      <div className='plane-card-line'>
        令牌:
        <input
          name='cluster_token'
          value={clusterToken}
          onChange={(e) => setClusterToken(e.target.value)}
        />
      </div>
      <div className='plane-card-line copy-box'>
        直连:
        <input
          value={getConnection(deploy)}
          readOnly={true}
        />
        <div>
          <button
            onClick={clickCopyButton}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="复制"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="#3498db"
            >
              <path d={copyPath}></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}


interface Stats {
  cpu: number
  memory: number
  read: string
  status: 'running' | 'pending' | 'stop'
}
interface PlaneSystemStatusProps {
  stats: Stats
}
function PlaneSystemStatus(props: PlaneSystemStatusProps) {
  const { stats } = props
  return (
    <div className='stats-box'>
      <div className='stats-box-item'>
        <Tooltip tip='CPU'>
          <svg
            viewBox="0 0 1024 1024"
            width="24"
            height="24"
            fill="#3498db"
          >
            <path d={CpuIcon}></path>
          </svg>
        </Tooltip>
        <div className='stats-box-text'>{stats.cpu}%</div>
      </div>
      <div className='stats-box-item'>
        <Tooltip tip='内存'>
          <svg
            viewBox="0 0 1024 1024"
            width="24"
            height="24"
            fill="#3498db"
          >
            <path d={MemoryIcon}></path>
          </svg>
        </Tooltip>
        <div className='stats-box-text'>{stats.memory}%</div>
      </div>
      <div className='stats-box-item'>
        <div className='stats-box-date'>{stats.read.slice(0, 16)}</div>
        <Tooltip tip={stats.status == 'running' ? '运行中' : '已停止'}>
          <svg
            viewBox="0 0 1024 1024"
            width="18"
            height="18"
            fill={stats.status == 'running' ? '#00ff00' : '#ff0000'}
          >
            <path d={PolkaDotIcon}></path>
          </svg>
        </Tooltip>
      </div>
    </div>
  )
}


interface ButtonsProps {
  deploy: Deploy,
  onDelete: (id: number) => void
}
interface ButtonStates {
  deleting: boolean
}
function Buttons(props: ButtonsProps) {
  const {deploy, onDelete} = props
  const [states, setStates] = useState<ButtonStates>({ deleting: false })
  const [shareTip, setShareTip] = useState('分享')
  async function handleShare() {
    let text = ""
    text = text + `房间: ${deploy.cluster.ini.cluster_name}\n`
    text = text + `玩家: ${deploy.cluster.ini.max_players}\n`
    text = text + `密码: ${deploy.cluster.ini.cluster_password}\n`
    text = text + `描述: ${deploy.cluster.ini.cluster_description}\n`
    text = text + `直连: ${getConnection(deploy)}\n`
    await navigator.clipboard.writeText(text)
    setShareTip('成功复制到剪切板')
  }
  const resetShareTip = () => {
    setShareTip('分享')
  }
  async function clickDelete() {
    setStates({
      ...states,
      deleting: true,
    })
    onDelete(deploy.id)
  }
  return (
    <div className='buttons-box'>
      <div className='buttons-box-item buttons-box-share' onClick={handleShare} onMouseLeave={resetShareTip}>
        <Tooltip tip={shareTip}>
          <svg
            viewBox="0 0 1025 1024"
            width="26"
            height="26"
            fill="#3498db"
          >
            <path d={ShareIcon}></path>
          </svg>
        </Tooltip>
      </div>
      <div className='buttons-box-item'>
        <Tooltip tip='下载存档'>
          <svg
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            fill="#3498db"
          >
            <path d={DownloadIcon}></path>
          </svg>
        </Tooltip>
      </div>
      <div className='buttons-box-item' onClick={clickDelete}>
        {states.deleting ?
          <Tooltip tip='删除中'>
            <svg
              fill="#3498db"
              viewBox="0 0 1024 1024"
              width="27"
              height="27"
            >
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
          </Tooltip> :
          <Tooltip tip='删除'>
            <svg
              fill="#3498db"
              viewBox="0 0 1024 1024"
              width="27"
              height="27"
            >
              <path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z"></path>
              <path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z"></path>
              <path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z"></path>
              <path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z"></path>
            </svg>
          </Tooltip>
        }
      </div>
      <div className='buttons-box-item'>
        <Tooltip tip='保存并部署'>
          <svg
            fill="#3498db"
            viewBox="0 0 1024 1024"
            width="27"
            height="27"
          >
            <path d="M965.1712 223.03232c-6.1184-47.68256-24.01792-86.77376-53.22752-115.98336-29.19936-29.20448-68.19328-47.09376-115.968-53.21728-43.66848-5.64736-92.672-0.9472-145.53088 13.77792-107.14112 29.91104-217.34912 97.49504-310.25664 190.27456a907.82208 907.82208 0 0 0-28.2624 29.55264c-87.01952-0.70144-166.02624 30.14144-223.47776 87.71584A292.5056 292.5056 0 0 0 28.50304 462.0544a29.4912 29.4912 0 0 0 26.84928 41.55392 30.68416 30.68416 0 0 0 10.71616-2.00192c38.02624-14.96064 82.41152-18.24768 129.63328-9.89184-10.83392 57.09824-1.536 112.2048 27.904 165.888a29.44512 29.44512 0 1 0 51.5328-28.25216c-23.31648-42.50624-42.86976-103.60832 0.93696-191.57504 0.128-0.2304 0.24064-0.34816 0.3584-0.5888 0.34304-0.768 0.73728-1.52064 1.1776-2.24256l1.7664-3.52256 2.10432-3.8912c0.11264-0.11264 0.11264-0.2304 0.2304-0.47104 15.77472-28.96384 37.56544-59.21792 65.00864-90.44992l0.11264-0.11264a782.848 782.848 0 0 1 34.84672-36.98176c62.52544-62.52032 135.40864-113.5872 207.9488-146.944l276.59264 276.59776c-33.32096 72.56576-84.41856 145.39776-146.92864 207.92832-57.70752 57.7024-112.45056 96.66048-163.2 116.33152-0.10752 0.11776-0.35328 0.11776-0.47104 0.23552-1.65888 0.58368-3.30752 1.29536-4.9408 1.8944l-1.05984 0.33792c-1.77152 0.5888-3.42016 1.1776-5.18656 1.77152-0.47616 0.10752-0.93696 0.34304-1.40288 0.48128a221.16864 221.16864 0 0 1-21.66272 5.87776c-50.74432 11.06944-98.31424 1.77152-145.13664-28.49792a29.50144 29.50144 0 0 0-31.91808 49.6128c43.8016 28.26752 89.60512 42.38336 136.832 42.38336a246.36416 246.36416 0 0 0 46.03904-4.52096c8.4224 47.32416 5.0688 91.71968-9.76896 129.74592a29.45024 29.45024 0 0 0 39.43936 37.56032 292.224 292.224 0 0 0 86.90176-59.94496c57.57952-57.56928 88.42752-136.46336 87.72096-223.47264a1059.86048 1059.86048 0 0 0 29.54752-28.25728c92.90752-92.90752 160.49152-202.9824 190.27456-310.25664 14.80704-52.68992 19.4048-101.54496 13.87008-145.34656zM212.90496 435.08736a344.77056 344.77056 0 0 0-66.64704-6.7072 275.36384 275.36384 0 0 0-28.02176 1.30048 203.3408 203.3408 0 0 1 11.89888-12.83072c34.85184-34.85184 79.92832-57.58464 130.57536-66.41664-20.64896 28.84096-36.42368 56.86784-47.80544 84.65408z m389.25312 453.77024a201.40032 201.40032 0 0 1-12.83072 11.89888c2.82112-30.2592 0.94208-62.17216-5.41696-94.90944 27.78624-11.29984 55.936-27.19744 84.64896-47.67744-8.69376 50.74944-31.43168 95.8464-66.40128 130.688z m292.60288-536.07424c-1.536 5.5296-3.17952 11.06944-4.94592 16.60416L649.728 129.30048a496.96256 496.96256 0 0 1 16.59904-4.9408c89.25696-24.84224 163.6608-16.00512 204.04224 24.38144 40.38144 40.38144 49.35168 114.76992 24.39168 204.04224z"></path>
            <path d="M418.36544 607.40096a29.45024 29.45024 0 0 0-41.6768 0l-188.74368 188.73856a29.4912 29.4912 0 0 0-0.00512 41.69216 29.48608 29.48608 0 0 0 41.68704 0l188.73856-188.73856a29.65504 29.65504 0 0 0 0-41.69216z"></path>
          </svg>
        </Tooltip>
      </div>
      <div className='buttons-box-item'>
        <Tooltip tip={deploy.status == 'running' ? '停止' : (deploy.status == 'stop' ? '启动' : '加载中')}>
          <svg
            fill="#3498db"
            viewBox="0 0 1024 1024"
            width="27"
            height="27"
          >
            <path d={deploy.status == 'running' ? StopIcon : (deploy.status == 'pending' ? LoadIcon : LaunchIcon)}>
              {deploy.status == 'pending' && <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 512 512"
                to="360 512 512"
                dur="2s"
                repeatCount="indefinite"
              />}
            </path>
          </svg>
        </Tooltip>
      </div>
    </div>
  )
}


interface ModsProps {
  deploy: Deploy
}
function Mods(props: ModsProps) {
  const { deploy } = props
  return (
    <div>
    </div>
  )
}