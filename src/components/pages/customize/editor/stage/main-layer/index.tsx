import KonvaObjects from '@/components/pages/customize/editor/stage/main-layer/objects'
import SelectionBox from '@/components/pages/customize/editor/stage/main-layer/selection-box'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { useWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'
import Konva from 'konva'
import React from 'react'
import { Group, Layer, Transformer } from 'react-konva'

const MainLayer = () => {
  const { transformerRef, selectionBoxRef } = useKonvaContext()

  const { workspace, design } = useWorkspacePosition()

  return (
    <Layer x={workspace.x} y={workspace.y}>
      <Group
        clipFunc={(ctx) => {
          if (design.path) {
            const path2D = new Path2D(design.path)

            return [path2D, 'evenodd']
          }
        }}
      >
        <KonvaObjects />
      </Group>
      <SelectionBox ref={selectionBoxRef} />
      <Transformer
        ref={transformerRef}
        keepRatio
        anchorSize={32}
        anchorStrokeWidth={4}
        // enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
        // anchorStroke="black"
        // borderStroke="black"
        // anchorFill="black"
        anchorCornerRadius={100}
        borderStrokeWidth={3}
        rotateAnchorOffset={100}
        anchorStyleFunc={(anchor) => {
          const transformer = anchor.getParent() as Konva.Transformer
          if (transformer) {
            const transformerHeight = transformer.height()
            if (transformerHeight < 160) {
              if (
                anchor.hasName('middle-right') ||
                anchor.hasName('middle-left') ||
                anchor.hasName('top-center') ||
                anchor.hasName('bottom-center')
              ) {
                anchor.hide()
              }
            } else if (anchor.hasName('top-center') || anchor.hasName('bottom-center')) {
              anchor.height(20)
              anchor.offsetY(10)
              anchor.width(100)
              anchor.offsetX(50)
            } else if (anchor.hasName('middle-left') || anchor.hasName('middle-right')) {
              anchor.height(100)
              anchor.offsetY(50)
              anchor.width(20)
              anchor.offsetX(10)
            }
          }

          return anchor
        }}
      />
    </Layer>
  )
}

export default MainLayer
