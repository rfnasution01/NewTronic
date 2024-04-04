import clsx from 'clsx'
import { List } from 'lucide-react'
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
  return (
    <div
      className={clsx('flex transition-all duration-300 hover:cursor-pointer', {
        'flex-row items-center justify-between gap-x-32 phones:gap-x-16 phones:bg-dark-tint-2 phones:px-48 phones:py-32 phones:text-white phones:shadow-lg':
          show,
        'flex-col-reverse items-center gap-y-16': !show,
      })}
    >
      {show && (
        <Link
          to="/"
          className="flex items-center gap-x-8 font-roboto text-[2.4rem]"
        >
          <img
            src="https://newtronic-solution.com/wp-content/uploads/2023/10/Main-Logo.png"
            alt="New Tronic"
            width={90}
            height={54}
          />
        </Link>
      )}
      <span onClick={handleShow || handleOpen}>
        <List />
      </span>
    </div>
  )
}
