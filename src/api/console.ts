import { Fetch } from "../api/fetch"

interface TailParams {
  id: number
  count: number
  tail: number
  world_index: number
}
async function tail(params: TailParams): Promise<string[]> {
  return await Fetch.get<string[]>(`/console/logs/tail/${params.id}`, params)
}

interface CommandBody {
  command: string
  world_index: number
}
async function command(id: number, body: CommandBody): Promise<string> {
  return await Fetch.post<string>(`/console/${id}`, null, body)
}

export const Console = {
  tail: tail,
  command: command,
}
