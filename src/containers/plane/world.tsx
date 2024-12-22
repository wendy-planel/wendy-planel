import { useEffect } from "react"
import { LuaFactory } from "wasmoon"

import "./styles/plane.css"
import { Deploy as DeploySchema, DeployClusterWorld } from "../../common/interface"

const factory = new LuaFactory("/assets/wasm/glue.wasm")

interface WorldProps {
  deploy: DeploySchema
  setDeploy: React.Dispatch<React.SetStateAction<DeploySchema>>
}
export function World(props: WorldProps) {
  return (
    <div>
      {props.deploy.cluster.world.map(function (world) {
        return <WorldCard key={world.id} world={world} setDeploy={props.setDeploy}></WorldCard>
      })}
    </div>
  )
}

interface WorldCardProps {
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
