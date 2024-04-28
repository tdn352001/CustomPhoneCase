import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { cn } from '@/libs/utils/tw-merge'
import { log } from 'console'
import Konva from 'konva'
import { useCallback, useEffect, useRef, useState } from 'react'

const TextArea = () => {
  const { stageRef, transformerRef, updateItem } = useKonvaContext()

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const textRef = useRef<Konva.Text>()

  const getTextAreaDefaultWidth = useCallback(
    (unit = true) => {
      const textarea = textAreaRef.current
      const text = textRef.current
      const stage = stageRef.current

      if (!textarea || !text || !stage) {
        throw new Error('TextArea or Text or Stage is not defined')
      }

      const width = text.width() * text.scaleX()

      if (unit) {
        return `${width}px`
      }

      return width
    },
    [stageRef]
  )

  const displayTextArea = useCallback(() => {
    const textarea = textAreaRef.current
    const stage = stageRef.current
    const transformer = transformerRef.current
    const text = textRef.current
    if (!textarea || !stage || !transformer || !text) {
      throw new Error('TextArea or Text or Stage is not defined')
    }

    text.hide()
    transformer.hide()

    const textPosition = text.getAbsolutePosition()

    textarea.value = text.text()
    textarea.style.lineHeight = text.lineHeight().toString()
    textarea.style.fontFamily = text.fontFamily()
    textarea.style.textAlign = text.align()
    textarea.style.color = text.fill()

    textarea.style.width = getTextAreaDefaultWidth() as string
    textarea.style.height = `${text.height() - text.padding() * 2 + 5}px`
    textarea.style.top = `${textPosition.y}px`
    textarea.style.left = `${textPosition.x}px`
    textarea.style.fontSize = `${text.fontSize() * stage.scaleY() * text.scaleY()}px`

    const rotation = text.rotation()
    let transform = ''
    if (rotation) {
      transform += `rotateZ(${rotation}deg)`
    }

    let px = 0
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
    if (isFirefox) {
      px += 2 + Math.round(text.fontSize() / 20)
    }
    if (px) {
      transform += `translateY(-${px}px)`
    }

    textarea.style.transform = transform
    textarea.style.display = 'block'
    textarea.focus()
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 3 + 'px'
  }, [getTextAreaDefaultWidth, stageRef, transformerRef])

  const hideTextArea = (escape = false) => {
    const text = textRef.current!
    const textarea = textAreaRef.current!
    const transformer = transformerRef.current!
    const stage = stageRef.current!

    text.show()
    transformer.show()

    updateItem?.(text.attrs.id, {
      ...text.attrs,
      text: escape ? text.text() : textarea.value,
      // width: textarea.scrollWidth / stage.scaleY() / text.scaleY(),
      // height: textarea!.value.split('\n').length * text.fontSize() * 1.2,
      width: textarea.scrollWidth / text.scaleX(),
      height: textarea.scrollHeight / text.scaleY(),
    })

    textarea.style.display = 'none'
  }

  const handleBlur = () => {
    hideTextArea()
  }

  const handleKeyDown = () => {
    const text = textRef.current!
    const textarea = textAreaRef.current!

    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + text.fontSize() * 1.2 + 'px'
  }

  useEffect(() => {
    window.customize = {
      startEditText: (text) => {
        textRef.current = text
        displayTextArea()
      },
    }
  }, [])

  return (
    <textarea
      id="current_text_editor"
      ref={textAreaRef}
      className={cn(
        'hidden absolute z-[100] bg-transparent border-none p-0 m-0 overflow-hidden outline-none resize-none origin-[left_top]'
      )}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}
export default TextArea
