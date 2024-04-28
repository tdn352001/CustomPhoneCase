import { KonvaEventObject } from 'konva/lib/Node'
import KonvaImage from './image'
import KonvaText from './text'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { useKonvaItems } from '@/components/pages/customize/hooks/use-konva-items'
import { KonvaNodeProps } from '@/libs/types'
import { KonvaNodeData } from '@/store/slices/customize'
import { isMetaKey } from '@/libs/utils/konva/is-meta-key'

const KonvaObjects = () => {
  const { getItem, updateItem, handleSelectItem, transformerRef } = useKonvaContext()
  const items = useKonvaItems()

  console.log('KonvaObjects')

  const handleDragEnd = (e: KonvaEventObject<Event>) => {
    e.evt.preventDefault()
    e.evt.stopPropagation()
    updateItem(e.target.attrs.id, e.target.attrs)
  }

  const handleTransform = (e: KonvaEventObject<Event>) => {
    const anchor = transformerRef.current?.getActiveAnchor()
    console.log(anchor)

    if (anchor) {
      if (anchor.includes('middle')) {
        const item = getItem(e.target.id())
        if (item) {
          const target = e.target
          const previousScaleX = item.attrs.scaleX || 1
          const width = (target.width() * target.scaleX()) / previousScaleX

          e.target?.setAttrs({
            width,
            scaleX: previousScaleX,
          })
        }
      } else if (anchor.includes('center')) {
        const item = getItem(e.target.id())
        if (item) {
          const target = e.target
          const previousScaleY = item.attrs.scaleY || 1
          const height = (target.height() * target.scaleY()) / previousScaleY

          e.target?.setAttrs({
            height,
            scaleY: previousScaleY,
          })
        }
      }
    }
  }

  const handleTransformEnd = (e: KonvaEventObject<Event>) => {
    const attrs = e.target.attrs

    updateItem(e.target.id(), {
      ...attrs,
      updatedAt: Date.now(),
    })
  }

  const renderObjects = (item: KonvaNodeData) => {
    const itemAttrs = item.attrs || {}
    const objectProps: KonvaNodeProps = {
      id: item.id,
      attrs: itemAttrs,
      draggable: true,
      onDragEnd: handleDragEnd,
      onTouchEnd: handleDragEnd,
      onClick: handleSelectItem,
      onTap: handleSelectItem,
      onTransform: handleTransform,
      onTransformEnd: handleTransformEnd,
      // isSelected: () => {
      //   const selectedItems = getSelectedItems();
      //   if (!selectedItems || !item.attrs.id) {
      //     return false;
      //   }
      //   return selectedItems.some((selectedItem) => selectedItem.attrs.id === item.attrs.id);
      // },
      ...itemAttrs,
    }
    switch (item.className) {
      case 'Text':
        return (
          <KonvaText key={`Text-${item.id}`} transformerRef={transformerRef} updateItem={updateItem} {...objectProps} />
        )
      case 'Image':
        return <KonvaImage key={`Image-${item.id}`} {...objectProps} />
    }
  }

  return <>{items.map((item) => renderObjects(item))}</>
}

export default KonvaObjects
