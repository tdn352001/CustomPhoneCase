import { KonvaSelectionBoxName } from '@/libs/constants/konva'
import { KonvaNodeAttributes } from '@/libs/types'
import React, { forwardRef } from 'react'
import { Rect } from 'react-konva'

type SelectionBoxProps = KonvaNodeAttributes

const SelectionBox = forwardRef((props: SelectionBoxProps, ref: any) => {
  return (
    <Rect
      ref={ref}
      name={KonvaSelectionBoxName}
      x={0}
      y={0}
      width={0}
      height={0}
      fill="skyblue"
      opacity={0.4}
      visible={false}
    />
  )
})

SelectionBox.displayName = 'SelectionBox'

export default SelectionBox
