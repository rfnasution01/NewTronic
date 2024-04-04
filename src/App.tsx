import { useSelector } from 'react-redux'
import { getModeSlice } from './store/reducer/stateMode'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'
import { AsideContent, AsideHeader } from './features/layout'
import { useState } from 'react'
import { DialogHelpers } from './components/ui/dialog'
import { Breadcrumb } from './components/Breadcrumb'
import { HeaderOptional } from './features/layout/headerOptional'

export default function MainLayout() {
  const mode = useSelector(getModeSlice)
  const [show, setShow] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <section
        id="RootLayout"
        className={clsx(
          'scrollbar relative flex max-h-screen min-h-screen max-w-full flex-col overflow-x-auto overflow-y-auto',
          {
            'bg-light-background text-black': mode.isLight,
            'bg-dark-background text-white': !mode?.isLight,
          },
        )}
      >
        <div className="flex flex-1 flex-row">
          <aside
            className={clsx(
              'sticky left-0 top-0 flex max-h-screen flex-col gap-y-64 p-32 text-white shadow phones:hidden',
              {
                'bg-dark-tint-2': mode.isLight,
                'bg-dark-tint-1': !mode.isLight,
              },
            )}
          >
            <AsideHeader show={show} handleShow={() => setShow(!show)} />
            <AsideContent show={show} />
          </aside>

          <article className="flex flex-1 flex-col gap-y-32">
            <header className="hidden phones:block">
              <AsideHeader show handleOpen={() => setIsOpen(true)} />
            </header>
            <div
              className={clsx(
                'flex flex-row items-center justify-between px-48 py-16 shadow-md phones:hidden',
                {
                  'bg-white': mode.isLight,
                  'bg-dark-tint-2': !mode?.isLight,
                },
              )}
            >
              <Breadcrumb />
              <HeaderOptional />
            </div>
            <div className="scrollbar h-[calc(100vh_-_14rem)] overflow-y-auto">
              <Outlet />
            </div>
          </article>
        </div>
      </section>
      <DialogHelpers
        title={
          <div className="flex items-center gap-x-8 px-48 py-32 shadow-md phones:bg-dark-background phones:text-white">
            <img
              src="https://newtronic-solution.com/wp-content/uploads/2023/10/Main-Logo.png"
              alt="New Tronic"
              width={90}
              height={54}
            />
          </div>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        isBgDark
        customComponent={
          <div className="flex flex-col gap-y-48">
            <AsideContent show onClose={() => setIsOpen(false)} />
            <HeaderOptional onClose={() => setIsOpen(false)} />
          </div>
        }
      />
    </>
  )
}
