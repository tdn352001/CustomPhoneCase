import { RefObject, useEffect, useRef } from 'react'
import Konva from 'konva'
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node'
import { KonvaNodeEvents } from 'react-konva'
import { isKonvaStage } from '@/libs/utils/konva/get-node-type'

export type UseSelectionBoxOptions = {
  stageRef: RefObject<Konva.Stage>
  selectionBoxRef: RefObject<Konva.Shape>
  selectItems: (item: Node | Node[]) => void
  getSelectedItems: () => Node[]
}

export const useStageEvents = ({
  stageRef,
  selectionBoxRef,
  selectItems,
  getSelectedItems,
}: UseSelectionBoxOptions): KonvaNodeEvents => {
  const pointerPosition = useRef({ x1: 0, y1: 0, x2: 0, y2: 0 })
  const isSelecting = useRef(false)

  const handleClick = (e: KonvaEventObject<Event>) => {
    const stage = stageRef.current
    const selectionBox = selectionBoxRef.current

    if (!stage || !selectionBox) return

    if (selectionBox.visible()) {
      return
    }

    const target = e.target

    if (isKonvaStage(target)) {
      if (getSelectedItems().length > 0) {
        selectItems([])
      }
      return
    }
  }

  const handleMouseDown = (e: Konva.KonvaEventObject<Event>) => {
    const stage = stageRef.current
    const selectionBox = selectionBoxRef.current
    if (!stage || !selectionBox) return

    if (e.target !== stage) {
      return
    }
    e.evt.preventDefault()

    const { x, y } = stage.getPointerPosition() ?? { x: 0, y: 0 }
    pointerPosition.current.x1 = x
    pointerPosition.current.y1 = y
    pointerPosition.current.x2 = x
    pointerPosition.current.y2 = y
    selectionBox.width(0)
    selectionBox.height(0)

    isSelecting.current = true
  }

  const handleMouseMove = () => {
    const stage = stageRef.current
    const selectionBox = selectionBoxRef.current

    if (!stage || !selectionBox) return

    if (!isSelecting.current) return
    const { x, y } = stage.getPointerPosition() ?? { x: 0, y: 0 }
    pointerPosition.current.x2 = x
    pointerPosition.current.y2 = y

    selectionBox.setAttrs({
      visible: true,
      x: Math.min(pointerPosition.current.x1, pointerPosition.current.x2),
      y: Math.min(pointerPosition.current.y1, pointerPosition.current.y2),
      width: Math.abs(pointerPosition.current.x2 - pointerPosition.current.x1),
      height: Math.abs(pointerPosition.current.y2 - pointerPosition.current.y1),
    })
  }

  const handleMouseUp = (e: Konva.KonvaEventObject<Event>) => {
    const stage = stageRef.current
    const selectionBox = selectionBoxRef.current
    if (!stage || !selectionBox) return

    if (!isSelecting.current) return

    isSelecting.current = false

    const box = selectionBox.getClientRect()

    const layers = stage.getLayers()
    const layer = layers[1]
    if (layer) {
      const selectedNodes = layer.getChildren().filter((node) => {
        const nodeName = node.name()
        if (nodeName === selectionBox.name() || nodeName === 'camera' || node instanceof Konva.Transformer) {
          return false
        }
        const nodeRect = node.getClientRect()
        return Konva.Util.haveIntersection(box, nodeRect)
      })

      if (selectedNodes && selectedNodes.length) {
        selectItems(selectedNodes)
      }
    }

    selectionBox.setAttrs({
      visible: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    })
  }

  return {
    onClick: handleClick,
    // onMouseDown: handleMouseDown,
    // onMouseMove: handleMouseMove,
    // onMouseUp: handleMouseUp,
    // onTap: handleClick,
    // onTouchStart: handleMouseDown,
    // onTouchMove: handleMouseMove,
    // onTouchEnd: handleMouseUp,
  }
}
