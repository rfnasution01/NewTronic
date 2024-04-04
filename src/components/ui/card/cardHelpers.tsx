import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import {
  capitalizeFirstLetterFromLowercase,
  convertToSlug,
} from '@/libs/helpers/formatText'
import { getModeSlice } from '@/store/reducer/stateMode'
import clsx from 'clsx'
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
>({
  idx,
  item,
  isDetail,
  isFetching,
}: {
  idx: number
  item: T
  isDetail?: boolean
  isFetching: boolean
}) {
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
      <div
        className={clsx('flex h-full flex-col gap-y-32', {
          'animate-pulse ': isFetching,
        })}
      >
        {item?.type?.includes('video') ? (
          <div
            className={clsx('flex-1', {
              'bg-slate-200': mode.isLight,
              'bg-dark-tint-1': !mode.isLight,
            })}
          >
            <video controls className="h-full">
              <source src={item?.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div
            className={clsx('flex-1', {
              'bg-slate-200': mode.isLight,
              'bg-dark-tint-1': !mode.isLight,
            })}
          >
            <img
              src={item?.banner ?? item?.url}
              alt={item.title}
              className="h-auto w-full"
            />
          </div>
        )}

        <div
          className={clsx('flex flex-col gap-y-8', {
            'animate-pulse': isFetching,
          })}
        >
          {isFetching ? (
            <>
              <div
                className={clsx('h-24', {
                  'bg-slate-200': mode.isLight,
                  'bg-dark-tint-1': !mode.isLight,
                })}
              />
              <div
                className={clsx('h-32', {
                  'bg-slate-200': mode.isLight,
                  'bg-dark-tint-1': !mode.isLight,
                })}
              />
            </>
          ) : (
            <>
              <span className="text-[2.4rem] font-bold">
                {capitalizeFirstLetterFromLowercase(item?.title)}
              </span>
              <span className="font-light">{item?.description}</span>
            </>
          )}
        </div>
        {!isDetail && (
          <Button
            variant="light"
            onClick={() => handleClick(convertToSlug(item?.title))}
            disabled={isFetching}
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
