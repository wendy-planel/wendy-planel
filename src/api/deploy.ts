import { Fetch } from "../api/fetch"
import { Deploy as DeploySchema } from "../common/interface"

const HOST = import.meta.env.VITE_API_HOST

interface readParams {
  status: "running" | "pending" | "stop"
}
async function read(params: readParams | undefined = undefined): Promise<DeploySchema[]> {
  return await Fetch.get<[DeploySchema]>("/deploy", params)
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

export const Deploy = {
  read: read,
  delete: del,
  update: update,
  download: download
}
