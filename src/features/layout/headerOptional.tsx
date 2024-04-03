import { Moon, Settings, SunMoon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StateModeType,
  getModeSlice,
  setStateMode,
} from '@/store/reducer/stateMode'

export function HeaderOptional({ onClose }: { onClose?: () => void }) {
  const dispatch = useDispatch()
  const mode = useSelector(getModeSlice)

  const handleChangeMode = (isLight: boolean) => {
    const newMode: StateModeType = {
      isLight: !isLight,
    }
    dispatch(setStateMode(newMode))
    onClose
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-end gap-x-48 phones:justify-center phones:gap-x-24">
      {/* Mode  */}
      <div
        className="flex h-64 items-center justify-center text-[2rem] hover:cursor-pointer hover:text-slate-400 phones:w-2/12"
        onClick={() => handleChangeMode(mode?.isLight)}
      >
        {mode?.isLight ? <Moon size={18} /> : <SunMoon size={18} />}
      </div>
      {/* Setting  */}
      <div className="flex h-64 items-center justify-center text-[2rem] phones:w-2/12">
        <Settings size={18} />
      </div>
    </div>
  )
}
