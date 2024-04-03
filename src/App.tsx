import { useSelector } from 'react-redux'
import { getModeSlice } from './store/reducer/stateMode'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'
import { AsideContent, AsideHeader } from './features/layout'
import { useState } from 'react'
import { DialogHelpers } from './components/ui/dialog'

export default function MainLayout() {
  const mode = useSelector(getModeSlice)
  const [show, setShow] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
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
            { 'bg-dark-tint-2': mode.isLight, 'bg-dark-tint-1': !mode.isLight },
          )}
        >
          <AsideHeader show={show} handleShow={() => setShow(!show)} />
          <AsideContent show={show} />
        </aside>

        <article className="flex flex-1 flex-col gap-y-32">
          <header className="hidden phones:block">
            <AsideHeader show handleOpen={() => setIsOpen(true)} />
          </header>
          {/* <div
            className={clsx(
              'flex flex-row items-center justify-between px-48 py-16 shadow-md phones:hidden',
              {
                'bg-white': mode.isLight,
                'bg-dark-tint-2': !mode?.isLight,
              },
            )}
          >
            <Breadcrumb />
            <OptionalNavigation
              isOpenCalculator={isOpenCalculator}
              setIsOpenCalculator={setIsOpenCalculator}
              isOpenCurrency={isOpenCurrency}
              setIsOpenCurrency={setIsOpenCurrency}
            />
          </div> */}
          <Outlet />
        </article>
      </div>
      <DialogHelpers
        title={
          <div className="flex items-center gap-x-8 px-48 py-32 shadow-md">
            <img src="/img/logo.png" alt="CoIndo" width={36} height={36} />
            <h5 className="font-roboto text-[2.4rem]">New Tronic</h5>
          </div>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        customComponent={<AsideContent show onClose={() => setIsOpen(false)} />}
      />
    </section>
  )
}
