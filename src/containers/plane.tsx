import { ChangeEvent, useEffect, useState } from 'react'

import './styles/plane.css'
import { readDeploy } from '../api'
import { Deploy } from '../common/interface'
import { Tooltip } from "../components/tooltip"
import { isPublicIP, extractFirstValidIP } from '../common/tools'
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
      if (a.status === 'running' && b.status !== 'running') {
        return -1;
      }
      if (a.status !== 'running' && b.status === 'running') {
        return 1;
      }
      return new Date(b.updated_at) > new Date(a.updated_at) ? 1 : -1;
    });
    setDeploy(data)
  }
  useEffect(() => { loadData() }, [])
  return (
    <div className='plane-box'>
      {
        deploy?.map(function (item) {
          return <PlaneDeploy key={item.id} deploy={item} ></PlaneDeploy>
        })
      }
    </div>
  )
}

interface PlaneDeployProps {
  deploy: Deploy
}
function PlaneDeploy(props: PlaneDeployProps) {
  const { deploy } = props
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
        <Buttons deploy={deploy}></Buttons>
      </div>
      <Mods deploy={deploy}></Mods>
    </div>
  )
}


function PlaneDeployRoom(props: PlaneDeployProps) {
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
            name='game_mode'
            value='endless'
            checked={clusterIni.game_mode === 'endless'}
          />
          <span>无尽</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniGameMode('survival')}>
          <input
            type='radio'
            readOnly={true}
            name='game_mode'
            value='survival'
            checked={clusterIni.game_mode === 'survival'}
          />
          <span>生存</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniGameMode('wilderness')}>
          <input
            type='radio'
            readOnly={true}
            name='game_mode'
            value='wilderness'
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
            name='pvp'
            value='false'
            checked={!clusterIni.pvp}
          />
          <span>关闭</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniPvp(true)}>
          <input
            type='radio'
            readOnly={true}
            name='pvp'
            value='true'
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
            name='vote_enabled'
            value='false'
            checked={!clusterIni.vote_enabled}
          />
          <span>关闭</span>
        </div>
        <div className='radio-item' onClick={() => handleClusterIniVote(true)}>
          <input
            type='radio'
            readOnly={true}
            name='vote_enabled'
            value='true'
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
  deploy: Deploy
}
function Buttons(props: ButtonsProps) {
  const [shareTip, setShareTip] = useState('分享')
  const { deploy } = props
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