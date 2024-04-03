export type PlaylistDataType = {
  id: number
  title: string
  description: string
  banner: string
  logo: string
  created_at: string
  updated_at: string
  playlist: PlaylistType[]
}

export type PlaylistType = {
  id: number
  dir_id: number
  title: string
  description: string
  url: string
  type: string
  created_at: string
  updated_at: string
}
