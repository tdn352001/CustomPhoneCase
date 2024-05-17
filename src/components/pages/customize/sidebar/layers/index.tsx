import React, { useCallback, useMemo, useState } from 'react'
import {
  Active,
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import LayerItem from './item'
import { useAppSelector } from '@/hooks/redux'
import { KonvaNodeData, customizeSelector } from '@/store/slices/customize'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import store from '@/store'

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.4',
      },
    },
  }),
}

const LayersTab = () => {
  const items = useAppSelector(customizeSelector.items)
  const [_, setForceUpdate] = useState(0)
  // const items = store.getState().customize.items
  console.log('layer update')

  const [active, setActive] = useState<Active | null>(null)
  const activeItem = useMemo(() => items.find((item) => item.id === active?.id), [active, items])

  const materialUrl = useAppSelector(customizeSelector.materialUrl)
  const selectedPhoneUrl = useAppSelector(customizeSelector.selectedPhoneUrl)
  const { setItems, removeItem, selectItems, selectById } = useKonvaContext()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = useCallback(({ active }: DragStartEvent) => {
    setActive(active)
  }, [])

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (over && active.id !== over.id) {
        const items = store.getState().customize.items
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        if (newIndex === -1 || oldIndex === -1) return

        setItems(arrayMove(items, oldIndex, newIndex))
      }
      setActive(null)
    },
    [setItems]
  )

  const handleDragCancel = useCallback(() => {
    setActive(null)
  }, [])

  const handleSelectItem = useCallback((item: KonvaNodeData) => {
    if (item.id) {
      selectById(item.id)
    }
  }, [])

  const handleBringForward = useCallback((item: KonvaNodeData) => {
    const items = store.getState().customize.items
    const index = items.findIndex((i) => i.id === item.id)
    if (index === items.length - 1) return
    setItems(arrayMove(items, index, index + 1))
  }, [])

  const handleSendBackward = useCallback((item: KonvaNodeData) => {
    const items = store.getState().customize.items
    const index = items.findIndex((i) => i.id === item.id)
    if (index === 0) return
    setItems(arrayMove(items, index, index - 1))
  }, [])

  const handleRemoveItem = useCallback((item: KonvaNodeData) => {
    removeItem(item.id)
    setForceUpdate((prev) => prev + 1)
    selectItems([])
  }, [])

  return (
    <div className="h-full">
      <ScrollArea className="h-full p-2">
        <div className="flex flex-col-reverse gap-3 p-1">
          <div className="w-full h-[5.25rem] p-2 flex items-center justify-center rounded-xl bg-white shadow-md ring-2 ring-black/5 select-none">
            <div className="max-w-[7.5rem]  h-full relative">
              <img className="w-full h-full object-contain" src={selectedPhoneUrl} alt="Image" />
              <img className="absolute top-0 w-full h-full object-contain" src={materialUrl} alt="Image" />
            </div>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
              {items.map((item) => {
                return (
                  <LayerItem
                    key={item.id}
                    item={item}
                    onClick={handleSelectItem}
                    onRemove={handleRemoveItem}
                    onBringForward={handleBringForward}
                    onSendBackward={handleSendBackward}
                  />
                )
              })}
            </SortableContext>
            <DragOverlay dropAnimation={dropAnimationConfig}>
              {activeItem ? <LayerItem item={activeItem} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </ScrollArea>
    </div>
  )
}

export default LayersTab
