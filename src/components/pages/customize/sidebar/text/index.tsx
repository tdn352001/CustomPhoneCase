import React from 'react'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'

interface TextTabProps {
  onAddText?: () => void
}

const TextTab = ({ onAddText }: TextTabProps) => {
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
          onAddText?.()
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
          onAddText?.()
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
          onAddText?.()
        }}
      >
        Add a little bit of body text
      </button>
    </div>
  )
}

export default TextTab
