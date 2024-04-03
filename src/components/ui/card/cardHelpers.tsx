import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import {
  capitalizeFirstLetterFromLowercase,
  convertToSlug,
} from '@/libs/helpers/formatText'
import { getModeSlice } from '@/store/reducer/stateMode'
import { Globe } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export function CardHelpers<
  T extends {
    title?: string
    description?: string
    banner?: string
    url?: string
    type?: string
  },
>({ idx, item, isDetail }: { idx: number; item: T; isDetail?: boolean }) {
  const mode = useSelector(getModeSlice)
  const navigate = useNavigate()

  const handleClick = (title: string) => {
    navigate(`detail?id=${title}`)
  }

  return (
    <Card
      variant={mode.isLight ? 'light' : 'dark'}
      color={mode?.isLight ? 'light' : 'dark'}
      radius="xl"
      classes="flex flex-col gap-y-24 col-span-3 phones:col-span-12"
      idx={idx}
    >
      <div className="flex h-full flex-col gap-y-32">
        {item?.type?.includes('video') ? (
          <div className="flex-1">
            <video controls className="h-full">
              <source src={item?.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img
            src={item?.banner ?? item?.url}
            alt={item?.title}
            style={{ width: '100%', height: 'auto' }}
          />
        )}

        <div className="flex flex-col gap-y-8">
          <span className="text-[2.4rem] font-bold">
            {capitalizeFirstLetterFromLowercase(item?.title)}
          </span>
          <span className="font-light">{item?.description}</span>
        </div>
        {!isDetail && (
          <Button
            variant="light"
            onClick={() => handleClick(convertToSlug(item?.title))}
          >
            <span>
              <Globe size={16} />
            </span>
            <span>DETAIL</span>
          </Button>
        )}
      </div>
    </Card>
  )
}
