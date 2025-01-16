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

export const Console = {
  tail: tail
}
