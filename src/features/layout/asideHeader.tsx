import clsx from 'clsx'
import { List } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

export function AsideHeader({
  show,
  setShow,
}: {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={clsx('flex transition-all duration-300 hover:cursor-pointer', {
        'flex-row items-center justify-between gap-x-32': show,
        'flex-col-reverse items-center gap-y-16': !show,
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
      <span onClick={() => setShow(!show)}>
        <List />
      </span>
    </div>
  )
}
