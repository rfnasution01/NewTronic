import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function Breadcrumb() {
  const { splittedPath } = usePathname()

  return (
    <div className="flex items-center gap-x-8">
      {splittedPath?.map((item, idx) => (
        <div className="flex items-center gap-x-8" key={idx}>
          <Link
            to={`${idx === splittedPath.length - 1 ? item : `/${item}`}`}
            style={{
              textDecoration: 'none',
              cursor: idx < splittedPath.length - 1 ? 'pointer' : 'not-allowed',
            }}
          >
            <span
              className={clsx('text-[2.4rem] ', {
                'font-semibold': idx < splittedPath.length - 1,
                'font-extralight text-slate-400':
                  idx >= splittedPath.length - 1,
              })}
            >
              {item === '' && idx === 1
                ? ''
                : item === '' && idx !== 1
                  ? 'Homepage'
                  : capitalizeFirstLetterFromLowercase(item)}
            </span>
          </Link>
          <span className="text-[2.4rem]">
            {idx < splittedPath.length - 1 && '/'}
          </span>
        </div>
      ))}
    </div>
  )
}
