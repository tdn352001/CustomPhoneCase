import KonvaObjects from '@/components/pages/customize/editor/stage/main-layer/objects'
import SelectionBox from '@/components/pages/customize/editor/stage/main-layer/selection-box'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { useWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'
import { serverLog } from '@/libs/utils/server-log'
import { log } from 'console'
import Konva from 'konva'
import React, { useEffect } from 'react'
import { Group, Layer, Rect, Transformer } from 'react-konva'

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
        anchorSize={20}
        anchorStrokeWidth={2}
        anchorCornerRadius={50}
        borderStrokeWidth={2}
        rotateAnchorOffset={50}
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
              anchor.height(10)
              anchor.offsetY(5)
              anchor.width(50)
              anchor.offsetX(25)
            } else if (anchor.hasName('middle-left') || anchor.hasName('middle-right')) {
              anchor.height(50)
              anchor.offsetY(25)
              anchor.width(10)
              anchor.offsetX(5)
            }
          }

          return anchor
        }}
        // onDragMove={(e) => {
        // const transformer = transformerRef.current!
        // const interactionBox = interactionBoxRef.current!
        // const { x, y } = transformer.getAbsolutePosition()
        // const { width, height } = transformer.size()
        // const scaleX = transformer.scaleX()
        // const scaleY = transformer.scaleY()
        // const rotation = transformer.rotation()
        // const position = transformer.position()
        // const offset = transformer.offset()
        // const transform = transformer.getAbsoluteTransform()
        // const matrix = transform.getMatrix()
        // // console.log({ matrix, x, y })
        // // console.log(matrix.join(', '))
        // interactionBox.style.top = `${matrix[5]}px`
        // interactionBox.style.left = `${matrix[4]}px`
        // }}
        // onTransform={(e) => {
        // const transformer = transformerRef.current!
        // const interactionBox = interactionBoxRef.current!
        // const { x, y } = transformer.getAbsolutePosition()
        // const {} = transformer.getAbsoluteScale()
        // let boxX = x
        // let boxY = y
        // const rotation = transformer.rotation()
        // console.log({ rotation, x, y })
        // interactionBox.style.top = `${boxY}px`
        // interactionBox.style.left = `${boxX}px`
        // }}
      />
    </Layer>
  )
}

export default MainLayer
