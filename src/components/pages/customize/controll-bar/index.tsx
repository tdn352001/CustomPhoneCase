import { useAppSelector } from '@/hooks/redux'
import { ControlBars, customizeSelector } from '@/store/slices/customize'
import History from './history'
import SelectPhone from './select-phone'
import TextStyle from './text-style'

const ControlBar = () => {
  const controlbar = useAppSelector(customizeSelector.controlBar)
  return (
    <div className="w-full h-[--header-height] px-5 py-2 border-b flex items-center gap-5">
      <History />
      <div className="ml-auto flex-1">
        {controlbar === ControlBars.Text && <TextStyle />}
        {controlbar === ControlBars.Default && <SelectPhone />}
      </div>
    </div>
  )
}

export default ControlBar
