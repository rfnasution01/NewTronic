import { Loading } from '@/components/Loading'
import { CardHelpers } from '@/components/ui/card'
import { PlaylistType } from '@/libs/consts/type'
import {
  capitalizeFirstLetterFromLowercase,
  convertSlugToText,
} from '@/libs/helpers/formatText'
import { useSearch } from '@/libs/hooks/useSearch'
import { useGetPlaylistQuery } from '@/store/slices/playlistAPI'
import { useEffect, useState } from 'react'

export default function DetailPlayList() {
  const { id } = useSearch()
  const { data, isFetching } = useGetPlaylistQuery()
  const [dataPlaylist, setDataPlaylist] = useState<PlaylistType[]>([])

  useEffect(() => {
    if (data?.data) {
      const filteredData = data?.data.filter((item) => {
        return (
          capitalizeFirstLetterFromLowercase(item?.title) ===
          convertSlugToText(id)
        )
      })

      setDataPlaylist(filteredData?.[0]?.playlist)
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
            <CardHelpers idx={idx} item={item} isDetail />
          ))}
        </>
      )}
    </div>
  )
}
