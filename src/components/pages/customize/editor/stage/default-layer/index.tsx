import Phone from './phone'
import Material from './material'
import { Layer } from 'react-konva'
import React from 'react'
import { useWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'

const DefaultLayer = () => {
  const {
    workspace: { x, y },
  } = useWorkspacePosition()

  return (
    <Layer listening={false} x={x} y={y}>
      <Phone />
      <Material />
    </Layer>
  )
}

export default DefaultLayer
