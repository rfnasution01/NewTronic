import { getModeSlice } from '@/store/reducer/stateMode'
import clsx from 'clsx'
import { List } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function AsideHeader({
  show,
  handleShow,
  handleOpen,
}: {
  show?: boolean
  handleShow?: () => void
  handleOpen?: () => void
}) {
  const mode = useSelector(getModeSlice)

  return (
    <div
      className={clsx('flex transition-all duration-300 hover:cursor-pointer', {
        'flex-row items-center justify-between gap-x-32 phones:gap-x-16 phones:px-48 phones:py-32 phones:shadow-lg':
          show,
        'flex-col-reverse items-center gap-y-16': !show,
        'phones:bg-light-background phones:text-black': mode.isLight,
        'phones:bg-dark-background phones:text-white': !mode?.isLight,
      })}
    >
      {show && (
        <Link
          to="/"
          className="flex items-center gap-x-8 font-roboto text-[2.4rem]"
        >
          <img src="/img/logo.png" alt="New Tronic" width={36} height={36} />
          <h5>New Tronic</h5>
        </Link>
      )}
      <span onClick={handleShow || handleOpen}>
        <List />
      </span>
    </div>
  )
}
