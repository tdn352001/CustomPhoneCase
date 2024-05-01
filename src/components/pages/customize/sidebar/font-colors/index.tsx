import SvgIcon from '@/components/ui/svg-icon'
import cx from 'clsx'
import { HTMLAttributes, useEffect, useState } from 'react'
import './styles.scss'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import Konva from 'konva'
import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'
import { useDebounceCallback } from 'usehooks-ts'

const FontColors = () => {
  const { updateItem, getSelectedItems, loadTypeface } = useKonvaContext()
  const selectedItems = getSelectedItems()
  const textNode = selectedItems[0] as Konva.Text
  const nodeId = textNode?.id()
  const _ = useAppSelector(customizeSelector.interactionNodeIds)!

  const color = textNode.fill()

  const updateStateDebounced = useDebounceCallback((color) => {
    updateItem(nodeId, { fill: color })
  }, 500)

  const handleColorChange = (color: string) => {
    textNode.fill(color)
    updateStateDebounced(color)
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
