
import { Fetch } from '../api/fetch'
import { Deploy } from '../common/interface'


interface readDeployParams {
  status: 'running' | 'pending' | 'stop'
}
export async function readDeploy(params: readDeployParams | undefined = undefined): Promise<[Deploy]> {
  return await Fetch.get<[Deploy]>('/api/deploy', params)
}

export async function deleteDeploy(id: number) {
  return await Fetch.delete<number>(`/api/deploy/${id}`)
}
