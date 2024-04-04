import { CardHelpers } from '@/components/ui/card'
import { PlaylistType } from '@/libs/consts/type'
import {
  capitalizeFirstLetterFromLowercase,
  convertSlugToText,
} from '@/libs/helpers/formatText'
import { useSearch } from '@/libs/hooks/useSearch'
import { getModeSlice } from '@/store/reducer/stateMode'
import { useGetPlaylistQuery } from '@/store/slices/playlistAPI'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function DetailPlayList() {
  const { id } = useSearch()
  const { data, isFetching } = useGetPlaylistQuery()
  const [dataPlaylist, setDataPlaylist] = useState<PlaylistType[]>([])
  const mode = useSelector(getModeSlice)

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
    <div className="mx-48 mb-48 grid grid-cols-12 gap-32 ">
      {!dataPlaylist || dataPlaylist.length === 0 ? (
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
              isDetail
              isFetching={isFetching}
            />
          ))}
        </>
      )}
    </div>
  )
}
