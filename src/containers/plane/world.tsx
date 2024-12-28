import { useEffect, useState } from "react"
import { LuaFactory } from "wasmoon"

import "./styles/plane.css"
import { Deploy as DeploySchema, DeployClusterWorld } from "../../common/interface"
import { CavesLeveldataoverrideDefault, MasterLeveldataoverrideDefault } from "../../common/constants"

const factory = new LuaFactory("/assets/wasm/glue.wasm")

interface World {
  index: number
  name: string
  type: "Master" | "Caves"
}
interface WorldProps {
  deploy: DeploySchema
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
export function World(props: WorldProps) {
  const { deploy, setDeploy } = props
  const [seleted, setSeleted] = useState<number>(0)
  const world: World[] = deploy.cluster.world.map(function (item, index) {
    return { index: index, type: item.type, name: item.type === "Master" ? "森林" : "洞穴" }
  })
  return (
    <div className="world-box">
      <TopNav seleted={seleted} world={world} setSeleted={setSeleted}></TopNav>
      <div>
        <WorldCard
          key={seleted}
          seleted={seleted}
          world={deploy.cluster.world[seleted]}
          setDeploy={props.setDeploy}
        ></WorldCard>
      </div>
    </div>
  )
}

function addWorld(type: "Master" | "Caves", world: DeployClusterWorld[]) {
  let is_master = type === "Master"
  let modoverrides = "return {  }"
  let docker_api = "unix:///var/run/docker.sock"
  let leveldataoverride = type === "Master" ? MasterLeveldataoverrideDefault : CavesLeveldataoverrideDefault
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
}

interface TopNavProps {
  seleted: number
  world: World[]
  setSeleted: React.Dispatch<React.SetStateAction<number>>
}
function TopNav(props: TopNavProps) {
  const [show, setShow] = useState<boolean>(false)
  const { seleted, world, setSeleted } = props
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
            {item.name}
          </div>
        )
      })}
      <div className="world-nav-add" onMouseEnter={() => setShow(true)}>
        <svg viewBox="0 0 1024 1024" width="20" height="20" fill="#3498db">
          <path d="M511.5 957.9C264.9 957.9 65 758.2 65 511.9s199.9-446 446.5-446S958 265.6 958 511.9c0.1 246.3-199.8 446-446.5 446zM509 149.1c-200.4 0-355.8 162.2-355.8 362.3 0 200.1 155.4 356.8 355.8 356.8s362.9-156.7 362.9-356.8c0-200.1-162.5-362.3-362.9-362.3zM690.5 556h-134v133.8c0 24.6-20 44.6-44.6 44.6h-0.1c-24.6 0-44.6-19.9-44.6-44.6V556h-134c-24.7 0-44.6-19.9-44.6-44.5v-0.1c0-24.6 20-44.6 44.6-44.6h134V333c0-24.6 20-44.6 44.6-44.6h0.1c24.7 0 44.6 19.9 44.6 44.6v133.8h134c24.7 0 44.6 19.9 44.6 44.6v0.1c0 24.6-19.9 44.5-44.6 44.5z m0 0"></path>
        </svg>
        {show && (
          <div className="world-nav-add-box">
            <div className="world-nav-add-button">森林</div>
            <div className="world-nav-add-button">洞穴</div>
          </div>
        )}
      </div>
    </div>
  )
}

interface WorldCardProps {
  seleted: number
  world: DeployClusterWorld
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
function WorldCard(props: WorldCardProps) {
  const { world, setDeploy } = props
  console.log(setDeploy)
  useEffect(() => {
    const parseLeveldataoverride = async () => {
      const lua = await factory.createEngine()
      const leveldataoverride = await lua.doString(world.leveldataoverride)
      console.log(leveldataoverride)
    }
    parseLeveldataoverride()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div></div>
}
