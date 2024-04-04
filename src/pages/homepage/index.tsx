import { Loading } from '@/components/Loading'
import { CardHelpers } from '@/components/ui/card'
import { PlaylistDataType } from '@/libs/consts/type'
import { getModeSlice } from '@/store/reducer/stateMode'
import { useGetPlaylistQuery } from '@/store/slices/playlistAPI'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Homepage() {
  const mode = useSelector(getModeSlice)
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
        <span
          className={clsx('col-span-12 p-24 text-center text-[2rem]', {
            'bg-white': mode.isLight,
            'bg-dark-tint-1': !mode.isLight,
          })}
        >
          --- Data Not Found ---
        </span>
      ) : (
        <>
          {dataPlaylist?.map((item, idx) => (
            <CardHelpers
              idx={idx}
              item={item}
              isFetching={isFetching}
              banner={item?.banner}
            />
          ))}
        </>
      )}
    </div>
  )
}
