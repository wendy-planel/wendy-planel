import { produce } from "immer"
import { LuaFactory } from "wasmoon"
import { useEffect, useState } from "react"

import "./styles/plane.css"
import { HoverTip } from "../../components/tips"
import { Deploy as DeploySchema, DeployClusterWorld } from "../../common/interface"
import { CavesDefault, MasterDefault, WorldOverrides } from "../../common/constants"

const factory = new LuaFactory("/assets/wasm/glue.wasm")

interface WorldProps {
  deploy: DeploySchema
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
export function World(props: WorldProps) {
  const { deploy, setDeploy } = props
  const [seleted, setSeleted] = useState<number>(0)
  return (
    <div className="world-box">
      <TopNav seleted={seleted} world={deploy.cluster.world} setSeleted={setSeleted} setDeploy={setDeploy}></TopNav>
      <div>
        {deploy.cluster.world.length > 0 && (
          <WorldCard
            key={seleted}
            seleted={seleted}
            world={deploy.cluster.world[seleted]}
            setDeploy={props.setDeploy}
          ></WorldCard>
        )}
      </div>
    </div>
  )
}

function addWorld(
  type: "Master" | "Caves",
  world: DeployClusterWorld[],
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
) {
  let is_master = type === "Master"
  let modoverrides = "return {  }"
  let docker_api = "unix:///var/run/docker.sock"
  let leveldataoverride = type === "Master" ? CavesDefault : MasterDefault
  for (const item of world) {
    if (item.is_master) {
      is_master = false
    }
    if (item.type === type) {
      docker_api = item.docker_api
      modoverrides = item.modoverrides
      leveldataoverride = item.leveldataoverride
    }
  }
  const ret = [...world]
  ret.push({
    id: String(ret.length + 1),
    name: type + "_" + ret.length + 1,
    leveldataoverride: leveldataoverride,
    modoverrides: modoverrides,
    is_master: is_master,
    server_port: -1,
    master_server_port: -1,
    authentication_port: -1,
    encode_user_path: true,
    type: type,
    version: "",
    docker_api: docker_api,
    container: ""
  })
  setDeploy(
    produce((draft) => {
      draft.cluster.world = ret
    })
  )
}

function removeWorld(
  seleted: number,
  world: DeployClusterWorld[],
  setSeleted: React.Dispatch<React.SetStateAction<number>>,
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
) {
  setDeploy(
    produce((draft) => {
      draft.cluster.world = [...world.slice(0, seleted), ...world.slice(seleted + 1)]
    })
  )
  setSeleted(0)
}

interface TopNavProps {
  seleted: number
  world: DeployClusterWorld[]
  setSeleted: React.Dispatch<React.SetStateAction<number>>
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
function TopNav(props: TopNavProps) {
  const [show, setShow] = useState<boolean>(false)
  const { seleted, world, setSeleted, setDeploy } = props
  return (
    <div className="world-nav" onMouseLeave={() => setShow(false)}>
      {world.map(function (item, index) {
        return (
          <div
            key={index}
            className="world-nav-item"
            onClick={() => setSeleted(index)}
            style={{ color: seleted === index ? "#fff" : "#666" }}
          >
            {item.type === "Master" ? "森林" : "洞穴"}
          </div>
        )
      })}
      <div className="world-nav-add" onMouseEnter={() => setShow(true)}>
        <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#3498db">
          <path d="M511.5 957.9C264.9 957.9 65 758.2 65 511.9s199.9-446 446.5-446S958 265.6 958 511.9c0.1 246.3-199.8 446-446.5 446zM509 149.1c-200.4 0-355.8 162.2-355.8 362.3 0 200.1 155.4 356.8 355.8 356.8s362.9-156.7 362.9-356.8c0-200.1-162.5-362.3-362.9-362.3zM690.5 556h-134v133.8c0 24.6-20 44.6-44.6 44.6h-0.1c-24.6 0-44.6-19.9-44.6-44.6V556h-134c-24.7 0-44.6-19.9-44.6-44.5v-0.1c0-24.6 20-44.6 44.6-44.6h134V333c0-24.6 20-44.6 44.6-44.6h0.1c24.7 0 44.6 19.9 44.6 44.6v133.8h134c24.7 0 44.6 19.9 44.6 44.6v0.1c0 24.6-19.9 44.5-44.6 44.5z m0 0"></path>
        </svg>
        {show && (
          <div className="world-nav-add-box">
            <div className="world-nav-add-button" onClick={() => addWorld("Master", world, setDeploy)}>
              森林
            </div>
            <div className="world-nav-add-button" onClick={() => addWorld("Caves", world, setDeploy)}>
              洞穴
            </div>
          </div>
        )}
      </div>
      <div
        className="world-nav-remove"
        onMouseEnter={() => setShow(false)}
        onClick={() => removeWorld(seleted, world, setSeleted, setDeploy)}
      >
        <svg viewBox="0 0 1024 1024" width="18" height="18" fill="#3498db" transform="scale(1.35)">
          <path d="M512 146.286a365.714 365.714 0 1 1 0 731.428 365.714 365.714 0 0 1 0-731.428z m0 62.025a303.69 303.69 0 1 0 0.073 607.451A303.69 303.69 0 0 0 512 208.311zM647.022 376.32a6.555 6.555 0 0 1 6.583 6.583 6.583 6.583 0 0 1-1.463 4.169L545.865 513.609l106.057 126.537a6.802 6.802 0 0 1 1.536 4.17 6.555 6.555 0 0 1-6.583 6.582l-53.833-0.292L512 553.984l-81.042 96.695-53.98 0.292a6.583 6.583 0 0 1-4.973-10.825l106.203-126.464-106.203-126.537a6.802 6.802 0 0 1-1.536-4.242 6.477 6.477 0 0 1 6.51-6.51l53.979 0.293L512 473.234l81.189-96.768z"></path>
        </svg>
      </div>
    </div>
  )
}

interface Option {
  name: string
  description: string
}
interface Override {
  name: string
  text: string
  group: string
  selected: number
  options: Option[]
  order: number
  image: string
}
interface WorldCardProps {
  seleted: number
  world: DeployClusterWorld
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
function WorldCard(props: WorldCardProps) {
  const { seleted, world, setDeploy } = props
  const [overrides, setOverrides] = useState<Override[]>([])
  useEffect(() => {
    const parseLeveldataoverride = async () => {
      const lua = await factory.createEngine()
      const leveldataoverride = await lua.doString(world.leveldataoverride)
      const _overrides = world.type === "Master" ? [...WorldOverrides.forest] : [...WorldOverrides.cave]
      _overrides?.forEach((item) => {
        const value = leveldataoverride.overrides[item.name]
        let selected = item.selected
        for (let i = 0; i < item.options.length; i++) {
          if (item.options[i].name === value) {
            selected = i
            break
          }
        }
        item.selected = selected
        return item
      })
      setOverrides(_overrides)
    }
    parseLeveldataoverride()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const updateDockerApi = (docker_api: string) => {
    setDeploy(
      produce((draft) => {
        draft.cluster.world[seleted].docker_api = docker_api
      })
    )
  }
  const rows = () => {
    let i = 0
    const items = []
    while (i < overrides.length) {
      const line = []
      for (let j = 0; j < 3 && i + j < overrides.length; j++) {
        const index = i + j
        const item = overrides[index]
        line.push(
          <div key={index} className="overrides">
            <img src={`/assets/images/${item.image}`} />
            <div>
              <svg viewBox="0 0 1024 1024" width="24" height="24" fill="#3498db">
                <path d="M734.165333 97.834667a42.666667 42.666667 0 0 1 3.541334 56.32l-3.541334 4.010666L380.416 512l353.749333 353.749333a42.666667 42.666667 0 0 1 3.541334 56.32l-3.541334 4.010667a42.666667 42.666667 0 0 1-56.32 3.584l-4.010666-3.541333-384-384a42.666667 42.666667 0 0 1-3.541334-56.32l3.541334-3.968 384-384a42.666667 42.666667 0 0 1 60.330666 0z"></path>
              </svg>
            </div>
            <HoverTip tip={item.text}>
              <div className="override-text">
                <div>{item.text}</div>
                <div className="override-value">{item.options[item.selected].description}</div>
              </div>
            </HoverTip>
            <div>
              <svg viewBox="0 0 1024 1024" width="24" height="24" fill="#3498db">
                <path d="M311.168 97.834667a42.666667 42.666667 0 0 0-3.541333 56.32l3.541333 4.010666L664.917333 512 311.168 865.706667a42.666667 42.666667 0 0 0-3.541333 56.32l3.541333 4.010666a42.666667 42.666667 0 0 0 56.32 3.584l4.010667-3.541333 384-384a42.666667 42.666667 0 0 0 3.541333-56.32l-3.541333-3.968-384-384a42.666667 42.666667 0 0 0-60.330667 0z"></path>
              </svg>
            </div>
          </div>
        )
      }
      items.push(
        <div key={i} className="overrides-row">
          {line}
        </div>
      )
      i += 3
    }
    return items
  }
  return (
    <div>
      <div className="plane-card-line">
        docker:
        <input name="docker_api" value={world.docker_api} onChange={(e) => updateDockerApi(e.target.value)} />
      </div>
      <div className="overrides-box">{rows()}</div>
    </div>
  )
}
