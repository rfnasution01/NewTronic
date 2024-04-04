import { Loading } from '@/components/Loading'
import { CardHelpers } from '@/components/ui/card'
import { PlaylistDataType } from '@/libs/consts/type'
import { useGetPlaylistQuery } from '@/store/slices/playlistAPI'
import { useEffect, useState } from 'react'

export default function Homepage() {
  const { data, isFetching } = useGetPlaylistQuery()
  const [dataPlaylist, setDataPlaylist] = useState<PlaylistDataType[]>([])

  useEffect(() => {
    if (data?.data) {
      setDataPlaylist(data?.data)
    }
  }, [data])

  return (
    <div className="mx-48 grid grid-cols-12 gap-32">
      {isFetching ? (
        <Loading />
      ) : !dataPlaylist || dataPlaylist.length === 0 ? (
        'Not Found'
      ) : (
        <>
          {dataPlaylist?.map((item, idx) => (
            <CardHelpers idx={idx} item={item} isFetching={isFetching} />
          ))}
        </>
      )}
    </div>
  )
}
