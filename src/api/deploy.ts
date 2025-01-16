import { Fetch } from "../api/fetch"
import { HOST } from "../common/constants"
import { Deploy as DeploySchema } from "../common/interface"

interface readParams {
  status: "running" | "pending" | "stop"
}
async function read(params: readParams | undefined = undefined): Promise<DeploySchema[]> {
  return await Fetch.get<DeploySchema[]>("/deploy", params)
}

async function del(id: number): Promise<number> {
  return await Fetch.delete<number>(`/deploy/${id}`)
}

async function update(id: number, deploy: DeploySchema): Promise<DeploySchema> {
  return await Fetch.put<DeploySchema>(`/deploy/${id}`, null, deploy.cluster)
}

async function download(id: number): Promise<Response> {
  return await fetch(HOST + `/cluster/download/${id}`, { method: "GET" })
}

async function stop(id: number): Promise<Response> {
  return await fetch(HOST + `/deploy/stop/${id}`, { method: "GET" })
}

async function restart(id: number): Promise<Response> {
  return await fetch(HOST + `/deploy/restart/${id}`, { method: "GET" })
}

export const Deploy = {
  read: read,
  delete: del,
  update: update,
  download: download,
  stop: stop,
  restart: restart
}
