import { LuaFactory } from 'wasmoon'
import { ChangeEvent, useState, useEffect } from 'react'

import './styles/plane.css'
import { Tooltip } from "../components/tooltip"
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


function isPublicIP(ip: string) {
  const parts = ip.split('.').map(Number)
  if (parts.length !== 4 || parts.some(part => isNaN(part) || part < 0 || part > 255)) {
    return false
  }
  return (
    parts[0] === 10 ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) ||
    parts[0] === 127
  )
}


function extractFirstValidIP(text: string) {
  const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g
  const matches = text.match(ipPattern)
  if (!matches) {
    return null
  }
  for (const ip of matches) {
    if (ip) {
      return ip
    }
  }
  return null
}


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
  const mock_data: Deploy = {
    "status": "running",
    "id": 6,
    "cluster": {
      "cluster_token": "pds-g^KU_K9a7KkUy^ZtVjkYqa1akxE4RY7Ef1GYryDzyjvfESjYO7nVvJfYs=",
      "ini": {
        "game_mode": "endless",
        "max_players": 6,
        "pvp": false,
        "pause_when_empty": true,
        "vote_enabled": false,
        "lan_only_cluster": false,
        "cluster_password": "110119",
        "cluster_description": "",
        "cluster_name": "Wendy",
        "offline_cluster": false,
        "cluster_language": "zh",
        "console_enabled": true,
        "shard_enabled": true,
        "bind_ip": "127.0.0.1",
        "master_ip": "127.0.0.1",
        "master_port": 10600,
        "cluster_key": "defaultPass"
      },
      "world": [
        {
          "leveldataoverride": "return {\n  desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  hideminimap=false,\n  id=\"ENDLESS\",\n  location=\"forest\",\n  max_playlist_position=999,\n  min_playlist_position=0,\n  name=\"无尽\",\n  numrandom_set_pieces=4,\n  override_level_string=false,\n  overrides={\n    alternatehunt=\"default\",\n    angrybees=\"default\",\n    antliontribute=\"default\",\n    autumn=\"default\",\n    bananabush_portalrate=\"default\",\n    basicresource_regrowth=\"always\",\n    bats_setting=\"default\",\n    bearger=\"default\",\n    beefalo=\"default\",\n    beefaloheat=\"default\",\n    beequeen=\"default\",\n    bees=\"default\",\n    bees_setting=\"default\",\n    berrybush=\"default\",\n    birds=\"default\",\n    boons=\"default\",\n    branching=\"default\",\n    brightmarecreatures=\"default\",\n    bunnymen_setting=\"default\",\n    butterfly=\"default\",\n    buzzard=\"default\",\n    cactus=\"default\",\n    cactus_regrowth=\"default\",\n    carrot=\"default\",\n    carrots_regrowth=\"default\",\n    catcoon=\"default\",\n    catcoons=\"default\",\n    chess=\"default\",\n    cookiecutters=\"default\",\n    crabking=\"default\",\n    crow_carnival=\"default\",\n    darkness=\"default\",\n    day=\"default\",\n    deciduousmonster=\"default\",\n    deciduoustree_regrowth=\"default\",\n    deerclops=\"default\",\n    dragonfly=\"default\",\n    dropeverythingondespawn=\"default\",\n    evergreen_regrowth=\"default\",\n    extrastartingitems=\"default\",\n    eyeofterror=\"default\",\n    fishschools=\"default\",\n    flint=\"default\",\n    flowers=\"default\",\n    flowers_regrowth=\"default\",\n    frograin=\"never\",\n    frogs=\"default\",\n    fruitfly=\"default\",\n    ghostenabled=\"always\",\n    ghostsanitydrain=\"none\",\n    gnarwail=\"default\",\n    goosemoose=\"default\",\n    grass=\"default\",\n    grassgekkos=\"default\",\n    hallowed_nights=\"default\",\n    has_ocean=true,\n    healthpenalty=\"always\",\n    hound_mounds=\"default\",\n    houndmound=\"default\",\n    hounds=\"default\",\n    hunger=\"default\",\n    hunt=\"default\",\n    keep_disconnected_tiles=true,\n    klaus=\"default\",\n    krampus=\"default\",\n    layout_mode=\"LinkNodesByKeys\",\n    lessdamagetaken=\"none\",\n    liefs=\"default\",\n    lightcrab_portalrate=\"default\",\n    lightning=\"default\",\n    lightninggoat=\"default\",\n    loop=\"default\",\n    lureplants=\"default\",\n    malbatross=\"default\",\n    marshbush=\"default\",\n    merm=\"default\",\n    merms=\"default\",\n    meteorshowers=\"default\",\n    meteorspawner=\"default\",\n    moles=\"default\",\n    moles_setting=\"default\",\n    monkeytail_portalrate=\"default\",\n    moon_berrybush=\"default\",\n    moon_bullkelp=\"default\",\n    moon_carrot=\"default\",\n    moon_fissure=\"default\",\n    moon_fruitdragon=\"default\",\n    moon_hotspring=\"default\",\n    moon_rock=\"default\",\n    moon_sapling=\"default\",\n    moon_spider=\"default\",\n    moon_spiders=\"default\",\n    moon_starfish=\"default\",\n    moon_tree=\"default\",\n    moon_tree_regrowth=\"default\",\n    mosquitos=\"default\",\n    mushroom=\"default\",\n    mutated_hounds=\"default\",\n    no_joining_islands=true,\n    no_wormholes_to_disconnected_tiles=true,\n    ocean_bullkelp=\"default\",\n    ocean_seastack=\"ocean_default\",\n    ocean_shoal=\"default\",\n    ocean_waterplant=\"ocean_default\",\n    ocean_wobsterden=\"default\",\n    palmcone_seed_portalrate=\"default\",\n    palmconetree=\"default\",\n    palmconetree_regrowth=\"default\",\n    penguins=\"default\",\n    penguins_moon=\"default\",\n    perd=\"default\",\n    petrification=\"default\",\n    pigs=\"default\",\n    pigs_setting=\"default\",\n    pirateraids=\"default\",\n    ponds=\"default\",\n    portal_spawnrate=\"default\",\n    portalresurection=\"always\",\n    powder_monkey_portalrate=\"default\",\n    prefabswaps_start=\"default\",\n    rabbits=\"default\",\n    rabbits_setting=\"default\",\n    reeds=\"default\",\n    reeds_regrowth=\"default\",\n    regrowth=\"default\",\n    resettime=\"none\",\n    rifts_enabled=\"default\",\n    rifts_frequency=\"default\",\n    roads=\"default\",\n    rock=\"default\",\n    rock_ice=\"default\",\n    saltstack_regrowth=\"default\",\n    sapling=\"default\",\n    season_start=\"default\",\n    seasonalstartingitems=\"default\",\n    shadowcreatures=\"default\",\n    sharks=\"default\",\n    spawnmode=\"fixed\",\n    spawnprotection=\"default\",\n    specialevent=\"default\",\n    spider_warriors=\"default\",\n    spiderqueen=\"default\",\n    spiders=\"default\",\n    spiders_setting=\"default\",\n    spring=\"default\",\n    squid=\"default\",\n    stageplays=\"default\",\n    start_location=\"default\",\n    summer=\"default\",\n    summerhounds=\"default\",\n    tallbirds=\"default\",\n    task_set=\"default\",\n    temperaturedamage=\"default\",\n    tentacles=\"default\",\n    terrariumchest=\"default\",\n    touchstone=\"default\",\n    trees=\"default\",\n    tumbleweed=\"default\",\n    twiggytrees_regrowth=\"default\",\n    walrus=\"default\",\n    walrus_setting=\"default\",\n    wasps=\"default\",\n    weather=\"default\",\n    wildfires=\"never\",\n    winter=\"default\",\n    winterhounds=\"default\",\n    winters_feast=\"default\",\n    wobsters=\"default\",\n    world_size=\"default\",\n    wormhole_prefab=\"wormhole\",\n    year_of_the_beefalo=\"default\",\n    year_of_the_bunnyman=\"default\",\n    year_of_the_carrat=\"default\",\n    year_of_the_catcoon=\"default\",\n    year_of_the_gobbler=\"default\",\n    year_of_the_pig=\"default\",\n    year_of_the_varg=\"default\" \n  },\n  playstyle=\"endless\",\n  random_set_pieces={\n    \"Sculptures_2\",\n    \"Sculptures_3\",\n    \"Sculptures_4\",\n    \"Sculptures_5\",\n    \"Chessy_1\",\n    \"Chessy_2\",\n    \"Chessy_3\",\n    \"Chessy_4\",\n    \"Chessy_5\",\n    \"Chessy_6\",\n    \"Maxwell1\",\n    \"Maxwell2\",\n    \"Maxwell3\",\n    \"Maxwell4\",\n    \"Maxwell6\",\n    \"Maxwell7\",\n    \"Warzone_1\",\n    \"Warzone_2\",\n    \"Warzone_3\" \n  },\n  required_prefabs={ \"multiplayer_portal\" },\n  required_setpieces={ \"Sculptures_1\", \"Maxwell5\" },\n  settings_desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  settings_id=\"ENDLESS\",\n  settings_name=\"无尽\",\n  substitutes={  },\n  version=4,\n  worldgen_desc=\"永不结束的饥荒沙盒模式。永远可以在绚丽之门复活。\",\n  worldgen_id=\"ENDLESS\",\n  worldgen_name=\"无尽\" \n}",
          "modoverrides": "return {  }",
          "id": "1",
          "name": "Master",
          "is_master": true,
          "server_port": 10601,
          "master_server_port": 10602,
          "authentication_port": 10603,
          "encode_user_path": true,
          "type": "Master",
          "version": "16244448",
          "docker_api": "unix:///var/run/docker.sock",
          "container": "dst_master_6"
        },
        {
          "leveldataoverride": "return {\n  background_node_range={ 0, 1 },\n  desc=\"探查洞穴…… 一起！\",\n  hideminimap=false,\n  id=\"DST_CAVE\",\n  location=\"cave\",\n  max_playlist_position=999,\n  min_playlist_position=0,\n  name=\"洞穴\",\n  numrandom_set_pieces=0,\n  override_level_string=false,\n  overrides={\n    atriumgate=\"default\",\n    banana=\"default\",\n    basicresource_regrowth=\"always\",\n    bats=\"default\",\n    bats_setting=\"default\",\n    beefaloheat=\"default\",\n    berrybush=\"default\",\n    boons=\"default\",\n    branching=\"default\",\n    brightmarecreatures=\"default\",\n    bunnymen=\"default\",\n    bunnymen_setting=\"default\",\n    cave_ponds=\"default\",\n    cave_spiders=\"default\",\n    cavelight=\"default\",\n    chess=\"default\",\n    crow_carnival=\"default\",\n    darkness=\"default\",\n    day=\"default\",\n    daywalker=\"default\",\n    dropeverythingondespawn=\"default\",\n    dustmoths=\"default\",\n    earthquakes=\"default\",\n    extrastartingitems=\"default\",\n    fern=\"default\",\n    fissure=\"default\",\n    flint=\"default\",\n    flower_cave=\"default\",\n    flower_cave_regrowth=\"default\",\n    fruitfly=\"default\",\n    ghostenabled=\"always\",\n    ghostsanitydrain=\"none\",\n    grass=\"default\",\n    grassgekkos=\"default\",\n    hallowed_nights=\"default\",\n    healthpenalty=\"always\",\n    hunger=\"default\",\n    krampus=\"default\",\n    layout_mode=\"RestrictNodesByKey\",\n    lessdamagetaken=\"none\",\n    lichen=\"default\",\n    liefs=\"default\",\n    lightflier_flower_regrowth=\"default\",\n    lightfliers=\"default\",\n    loop=\"default\",\n    marshbush=\"default\",\n    merms=\"default\",\n    molebats=\"default\",\n    moles_setting=\"default\",\n    monkey=\"default\",\n    monkey_setting=\"default\",\n    mushgnome=\"default\",\n    mushroom=\"default\",\n    mushtree=\"default\",\n    mushtree_moon_regrowth=\"default\",\n    mushtree_regrowth=\"default\",\n    nightmarecreatures=\"default\",\n    pigs_setting=\"default\",\n    portalresurection=\"always\",\n    prefabswaps_start=\"default\",\n    reeds=\"default\",\n    regrowth=\"default\",\n    resettime=\"none\",\n    rifts_enabled_cave=\"default\",\n    rifts_frequency_cave=\"default\",\n    roads=\"never\",\n    rock=\"default\",\n    rocky=\"default\",\n    rocky_setting=\"default\",\n    sapling=\"default\",\n    season_start=\"default\",\n    seasonalstartingitems=\"default\",\n    shadowcreatures=\"default\",\n    slurper=\"default\",\n    slurtles=\"default\",\n    slurtles_setting=\"default\",\n    snurtles=\"default\",\n    spawnmode=\"fixed\",\n    spawnprotection=\"default\",\n    specialevent=\"default\",\n    spider_dropper=\"default\",\n    spider_hider=\"default\",\n    spider_spitter=\"default\",\n    spider_warriors=\"default\",\n    spiderqueen=\"default\",\n    spiders=\"default\",\n    spiders_setting=\"default\",\n    start_location=\"caves\",\n    task_set=\"cave_default\",\n    temperaturedamage=\"default\",\n    tentacles=\"default\",\n    toadstool=\"default\",\n    touchstone=\"default\",\n    trees=\"default\",\n    weather=\"default\",\n    winters_feast=\"default\",\n    world_size=\"default\",\n    wormattacks=\"default\",\n    wormhole_prefab=\"tentacle_pillar\",\n    wormlights=\"default\",\n    worms=\"default\",\n    year_of_the_beefalo=\"default\",\n    year_of_the_bunnyman=\"default\",\n    year_of_the_carrat=\"default\",\n    year_of_the_catcoon=\"default\",\n    year_of_the_gobbler=\"default\",\n    year_of_the_pig=\"default\",\n    year_of_the_varg=\"default\" \n  },\n  required_prefabs={ \"multiplayer_portal\" },\n  settings_desc=\"探查洞穴…… 一起！\",\n  settings_id=\"DST_CAVE\",\n  settings_name=\"洞穴\",\n  substitutes={  },\n  version=4,\n  worldgen_desc=\"探查洞穴…… 一起！\",\n  worldgen_id=\"DST_CAVE\",\n  worldgen_name=\"洞穴\" \n}\n",
          "modoverrides": "return {  }",
          "id": "2",
          "name": "Caves",
          "is_master": false,
          "server_port": 10604,
          "master_server_port": 10605,
          "authentication_port": 10606,
          "encode_user_path": true,
          "type": "Caves",
          "version": "16244448",
          "docker_api": "unix:///var/run/docker.sock",
          "container": "dst_caves_6"
        }
      ]
    },
    "updated_at": "2024-10-01T12:42:40.012510+08:00",
    "created_at": "2024-10-01T12:42:03.695960+08:00"
  }
  return (
    <div className='plane-box'>
      <PlaneDeploy deploy={mock_data} ></PlaneDeploy>
      <PlaneDeploy deploy={mock_data} ></PlaneDeploy>
      <PlaneDeploy deploy={mock_data} ></PlaneDeploy>
      <PlaneDeploy deploy={mock_data} ></PlaneDeploy>
    </div>
  )
}


interface DeployClusterIni {
  game_mode: "survival" | "endless" | "wilderness"
  max_players: number
  pvp: boolean
  pause_when_empty: boolean
  vote_enabled: boolean
  lan_only_cluster: boolean
  cluster_password: string
  cluster_description: string
  cluster_name: string
  offline_cluster: boolean
  cluster_language: string
  console_enabled: boolean
  shard_enabled: boolean
  bind_ip: string
  master_ip: string
  master_port: number
  cluster_key: string
}
interface DeployClusterWorld {
  id: string
  name: string
  leveldataoverride: string
  modoverrides: string
  is_master: boolean
  server_port: number
  master_server_port: number
  authentication_port: number
  encode_user_path: boolean
  type: "Master" | "Caves"
  version: string
  docker_api: string
  container: string
}
interface DeployCluster {
  cluster_token: string
  ini: DeployClusterIni
  world: DeployClusterWorld[]
}
interface Deploy {
  id: number
  status: 'running' | 'pending' | 'stop'
  cluster: DeployCluster
  updated_at: string
  created_at: string
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


async function testLua() {
  let code = "";
  fetch('/assets/modinfo.lua')
      .then(response => response.text())
      .then(text => code = text)
  const factory = new LuaFactory('./assets/wasm/glue.wasm')
  const lua = await factory.createEngine()
  try {
      await lua.doString(code)
      const configuration_options = lua.global.get('configuration_options')
      console.log(configuration_options)
  } finally {
      lua.global.close()
  }
}


interface ModsProps {
  deploy: Deploy
}
function Mods(props: ModsProps) {
  const { deploy } = props
  console.log(deploy)
  useEffect(() => {
    testLua()
  })
  return (
    <div>
    </div>
  )
}