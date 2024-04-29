import SvgIcon from '@/components/ui/svg-icon'
import cx from 'clsx'
import { HTMLAttributes, useEffect, useState } from 'react'
import './styles.scss'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import Konva from 'konva'
import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'

const Group = ({ className, title, children, ...props }: HTMLAttributes<HTMLDivElement> & { title?: string }) => {
  return (
    <div className={cx('flex flex-col gap-3', className)} {...props}>
      <p className="text-xl text-disabled">{title}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

const documentColors = ['#fffff', '#000000']

const FontColors = () => {
  const { updateItem, getSelectedItems, loadTypeface } = useKonvaContext()
  const selectedItems = getSelectedItems()
  const textNode = selectedItems[0] as Konva.Text
  const nodeId = textNode?.id()
  const _ = useAppSelector(customizeSelector.interactionNodeIds)!
  // const [color, setColor] = useState(textNode.fill())

  const color = textNode.fill()
  const handleColorChange = (color: string) => {
    // setColor(color)
    updateItem(textNode.id(), { fill: color })
  }

  return (
    <div className="h-full p-4">
      <div className="color-picker">
        <HexColorPicker color={color} onChange={handleColorChange} />
        <div className="w-full h-10 mt-3 flex items-center justify-center gap-0.5 rounded-sm border focus-within:border-primary-02">
          <span className="block text-sm">#</span>
          <HexColorInput className="w-16 text-sm focus:outline-none" color={color} onChange={handleColorChange} />
        </div>
      </div>
    </div>
  )
}

export default FontColors
