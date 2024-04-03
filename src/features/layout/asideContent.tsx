import { ListNavigationMain } from '@/libs/consts/dummy'
import { usePathname } from '@/libs/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function AsideContent({ show }: { show?: boolean }) {
  const { firstPathname } = usePathname()

  const isPathnameOpen = (name: string) => {
    return (
      (name === 'Homepage' && firstPathname === '') ||
      firstPathname === name.toLowerCase()
    )
  }

  return (
    <div
      className={clsx('flex flex-1 flex-col gap-y-24', {
        'items-center': !show,
        'items-start': show,
      })}
    >
      {ListNavigationMain.map((item, idx) => (
        <Link
          to={item?.url}
          className={clsx(
            'flex items-center gap-x-16 rounded-lg px-32 py-16 hover:text-white',
            {
              '': isPathnameOpen(item?.name),
              'text-slate-400': !isPathnameOpen(item?.name),
            },
            {
              'min-w-[25rem]': show,
              'w-auto': !show,
            },
          )}
          key={idx}
        >
          <span className="">{item?.icon}</span>
          {show && <h5 className="font-roboto text-[2rem]">{item?.name}</h5>}
        </Link>
      ))}
    </div>
  )
}
