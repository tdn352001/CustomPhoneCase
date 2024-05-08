import React, { forwardRef, memo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { KonvaNodeData } from '@/store/slices/customize'
import { Button } from '@/components/ui/button'
import SvgIcon from '@/components/ui/svg-icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface LayerItemProps {
  item: KonvaNodeData
  onClick?: (item: KonvaNodeData) => void
  onRemove?: (item: KonvaNodeData) => void
  onBringForward?: (item: KonvaNodeData) => void
  onSendBackward?: (item: KonvaNodeData) => void
}

const LayerItem = (props: LayerItemProps) => {
  const { item, onClick, onRemove, onBringForward, onSendBackward } = props
  const type = item.className

  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  })

  const style = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
    viewTransitionName: `layer-item-${item.id}`,
  }

  return (
    <div
      className="w-full h-[5.25rem] p-2 flex items-center justify-between rounded-xl bg-white shadow-md select-none touch-none"
      style={style}
      onClick={() => onClick?.(item)}
      ref={setNodeRef}
    >
      <Button
        className="touch-none collapse md:visible"
        variant="text"
        size="unset"
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
      >
        <SvgIcon icon="Drag" size={20} />
      </Button>
      <div className="h-full flex items-center justify-center">
        {type === 'Text' && (
          <p
            className="line-clamp-2 max-w-[7.5rem]"
            style={{
              color: item.attrs.color,
              fontWeight: item.attrs.fontWeight,
              fontStyle: item.attrs.fontStyle,
              fontFamily: item.attrs.fontFamily,
            }}
          >
            {item.attrs.text}
          </p>
        )}
        {type === 'Image' && <img className="h-full" src={item.attrs.src} alt="Image" />}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="text" size="unset">
            <SvgIcon icon="More" size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[15.25rem]" align="end">
          <DropdownMenuItem onClick={() => onBringForward?.(item)}>
            <SvgIcon icon="ChevronUpCircle" size={20} />
            <span>Bring Forward</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSendBackward?.(item)}>
            <SvgIcon icon="ChevronDownCircle" size={20} />
            <span>Send Backward</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onRemove?.(item)}>
            <SvgIcon icon="Trash" size={20} />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

LayerItem.displayName = 'LayerItem'

export default memo(LayerItem)
