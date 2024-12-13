import { Fetch } from "../api/fetch";
import { Deploy as DeploySchema } from "../common/interface";

interface readParams {
  status: "running" | "pending" | "stop";
}
async function read(
  params: readParams | undefined = undefined
): Promise<DeploySchema[]> {
  return await Fetch.get<[DeploySchema]>("/api/deploy", params);
}

async function del(id: number): Promise<number> {
  return await Fetch.delete<number>(`/api/deploy/${id}`);
}

async function update(id: number, deploy: DeploySchema): Promise<DeploySchema> {
  return await Fetch.put<DeploySchema>(
    `/api/deploy/${id}`,
    null,
    deploy.cluster
  );
}

export const Deploy = {
  read: read,
  delete: del,
  update: update,
};
