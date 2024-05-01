import React, { useEffect, useRef, useState } from 'react'
import Stage from './stage'
import { HotkeysProvider } from 'react-hotkeys-hook'

const Editor = () => {
  const [ready, setReady] = React.useState(false)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = containerRef.current?.clientWidth || 0
    const height = containerRef.current?.clientHeight || 0
    setDimension({ width, height })
    setReady(true)
  }, [])

  return (
    <div
      className="w-full h-full flex items-center justify-center bg-primary-04 relative overflow-hidden"
      style={{ opacity: ready ? 1 : 0 }}
      ref={containerRef}
    >
      {ready && (
        <HotkeysProvider>
          <Stage containerWidth={dimension.width} containerHeight={dimension.height} />
        </HotkeysProvider>
      )}
    </div>
  )
}

export default Editor
