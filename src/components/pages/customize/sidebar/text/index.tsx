import React from 'react'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'

const TextTab = () => {
  const { addText } = useKonvaContext()
  return (
    <div className="flex flex-col gap-3 p-5">
      <button
        className="px-3 py-2 rounded-sm bg-primary-04 text-left tracking-wide text-4xl font-bold"
        onClick={() => {
          addText({
            content: 'Heading',
            fontSize: 150,
          })
        }}
      >
        Add a heading
      </button>
      <button
        className="px-3 py-2 rounded-sm bg-primary-04 text-left tracking-wide text-xl font-semibold"
        onClick={() => {
          addText({
            content: 'Subheading',
            fontSize: 120,
          })
        }}
      >
        Add a subheading
      </button>
      <button
        className="px-3 py-2 rounded-sm bg-primary-04 text-left tracking-wide"
        onClick={() => {
          addText({
            content: 'body',
            fontSize: 100,
          })
        }}
      >
        Add a little bit of body text
      </button>
    </div>
  )
}

export default TextTab
