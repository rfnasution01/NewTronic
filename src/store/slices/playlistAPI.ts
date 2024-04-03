import { PlaylistDataType } from '@/libs/consts/type'
import { Res, api } from '../api'

export const playlistEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query<Res<PlaylistDataType[]>, void>({
      query: () => ({
        url: 'directory/dataList',
      }),
    }),
  }),
})

export const { useGetPlaylistQuery } = playlistEndpoints
