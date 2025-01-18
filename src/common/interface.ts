export interface DeployClusterIni {
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

export interface DeployClusterWorld {
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

export interface Deploy {
  id: number
  status: "running" | "pending" | "stop"
  cluster: DeployCluster
  updated_at: string
  created_at: string
  _show: boolean
}

export interface DeployCreate {
  status: "running" | "pending"
  cluster: DeployCluster
}

export interface Tag {
  tag: string
}

export interface Configuration {
  enabled: boolean
  configuration_options: Record<string, any>
}

interface Option {
  data: any
  description: string
}

export interface ConfigurationOption {
  options: Option[]
  label: string
  default: any
  selected?: number
  hover: string
  name: string
}

export interface PublishedFileDetail {
  publishedfileid: string
  result: number
  creator: string
  creator_app_id: number
  consumer_app_id: number
  filename: string
  file_size: string
  file_url: string
  hcontent_file: string
  preview_url: string
  hcontent_preview: string
  title: string
  description: string
  time_created: number
  time_updated: number
  visibility: number
  banned: number
  ban_reason: string
  subscriptions: number
  favorited: number
  lifetime_subscriptions: number
  lifetime_favorited: number
  views: number
  tags: Tag[]
  code?: string
  configuration_options?: ConfigurationOption[]
  configuration?: Configuration
}

export interface ModInfo {
  id: string
  code: string
}
