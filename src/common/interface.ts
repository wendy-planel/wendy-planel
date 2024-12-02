interface DeployClusterIni {
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

interface DeployClusterWorld {
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
    status: 'running' | 'pending' | 'stop'
    cluster: DeployCluster
    updated_at: string
    created_at: string
}
