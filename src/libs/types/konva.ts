import { KonvaNodeEvents } from 'react-konva'

export type KonvaNodeAttributes = {
  id?: string
  x?: number
  y?: number
  width?: number
  height?: number
  fill?: string
  draggable?: boolean
  align?: 'left' | 'center' | 'right'
  fontStyle?: 'normal' | 'italic' | 'bold' | 'italic bold'
  textDecoration?: '' | 'underline' | 'line-through'
  'data-item-type'?: string
} & Record<string, any>

export type KonvaNodeProps = {
  id: string
  attrs: KonvaNodeAttributes
  updateItem?: (id: string, attrs: KonvaNodeAttributes) => void
  // isSelected: () => boolean;
} & KonvaNodeEvents &
  Record<string, any>
