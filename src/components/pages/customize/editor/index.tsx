import React, { useEffect, useRef, useState } from 'react'
import Stage from './stage'
import { HotkeysProvider } from 'react-hotkeys-hook'
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts'

type Size = {
  width?: number
  height?: number
}

const Editor = () => {
  const [{ width, height }, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const onResize = useDebounceCallback(setSize, 200)

  useResizeObserver({
    ref: containerRef,
    onResize,
    box: 'border-box',
  })

  const isReady = width !== undefined && height !== undefined

  console.log({ width, height })
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-primary-04 relative overflow-hidden"
      style={{ opacity: isReady ? 1 : 0 }}
      ref={containerRef}
    >
      {isReady && (
        <HotkeysProvider>
          <Stage containerWidth={width} containerHeight={height} />
        </HotkeysProvider>
      )}
    </div>
  )
}

export default Editor
