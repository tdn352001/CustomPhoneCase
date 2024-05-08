import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'
import React, { RefObject, useEffect, useRef } from 'react'
import { Text } from 'react-konva'
import { KonvaNodeProps } from '@/libs/types'
import { isMetaKey } from '@/libs/utils/konva/is-meta-key'

type KonvaTextProps = KonvaNodeProps & {
  transformerRef: RefObject<Konva.Transformer>
}

/**
 * Override onClick and onTap event receive from parent
 */
const KonvaText = (props: KonvaTextProps) => {
  const { onClick, transformerRef, updateItem, ...rest } = props

  const textRef = useRef<Konva.Text>(null)
  console.log('text render')

  const timeoutRef = useRef<number>()

  const handleStartEditText = () => {
    window.clearTimeout(timeoutRef.current)

    const text = textRef.current
    if (!text) {
      console.error('textRef is null')
      return
    }
    window.customize?.startEditText(text)
  }

  const handleTextClick = (e: KonvaEventObject<MouseEvent>) => {
    window.clearTimeout(timeoutRef.current)
    const duration = isMetaKey(e) ? 0 : 200
    timeoutRef.current = window.setTimeout(() => {
      onClick?.(e)
    }, duration)
  }

  return (
    <Text
      ref={textRef}
      {...rest}
      onClick={handleTextClick}
      onDblClick={handleStartEditText}
      onTap={handleTextClick}
      onDblTap={handleStartEditText}
    />
  )
}

export default KonvaText
