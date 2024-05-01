import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { Button } from '@/components/ui/button'
import SvgIcon from '@/components/ui/svg-icon'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { cn } from '@/libs/utils/tw-merge'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import React, { ChangeEvent, HTMLAttributes, FocusEvent, useRef, useCallback, useEffect } from 'react'
import Konva from 'konva'
import { ControlBars, CustomizeTab, customizeActions, customizeSelector } from '@/store/slices/customize'
import { Separator } from '@/components/ui/separator'
import { Toggle } from '@/components/ui/toggle'

const Group = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex items-center gap-2', className)} {...props} />
}

const MIN_FONT_SIZE = 20
const MAX_FONT_SIZE = 9999
const REGEXP_ONLY_DIGITS = '^\\d+$'

const TextStyle = () => {
  const [_, setForceUpdate] = React.useState(0)

  const { getSelectedItems, updateItem } = useKonvaContext()
  const selectedItems = getSelectedItems()
  const textNode = selectedItems[0] as Konva.Text
  const activeTab = useAppSelector(customizeSelector.activeTab)

  const interactionNode = useAppSelector(customizeSelector.interactionNode)!
  // const interactionNodeIds = useAppSelector(customizeSelector.interactionNodeIds)!

  const inputRef = useRef<HTMLInputElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  const textSize = textNode.fontSize()
  const isSelectingFont = activeTab === CustomizeTab.FontFamily
  const isSelectingColor = activeTab === CustomizeTab.FontColors

  const fontStyle = textNode.fontStyle()
  const isBold = fontStyle.includes('bold')
  const isItalic = fontStyle.includes('italic')
  const isUnderline = textNode.textDecoration() === 'underline'

  const align = textNode.align()
  const isAlignLeft = align === 'left'
  const isAlignRight = align === 'right'
  const isAlignCenter = align === 'center'

  const dispatch = useAppDispatch()

  const forceUpdate = () => setForceUpdate((prev) => prev + 1)

  const updateInputWidth = useCallback(() => {
    if (inputRef.current && spanRef.current) {
      spanRef.current.textContent = inputRef.current.value
      inputRef.current.style.width = spanRef.current.scrollWidth + 'px'
    }
  }, [])

  const handleDecreaseFontSize = () => {
    const fontSize = Math.max(textNode.fontSize() - 1, MIN_FONT_SIZE)
    inputRef.current!.value = fontSize.toString()
    updateItem(textNode.id(), { fontSize })
    forceUpdate()
  }

  const handleIncreaseFontSize = () => {
    const fontSize = Math.min(textNode.fontSize() + 1, MAX_FONT_SIZE)
    inputRef.current!.value = fontSize.toString()
    updateItem(textNode.id(), { fontSize })
    forceUpdate()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    e.target.style.width = e.target.scrollWidth + 'px'

    const numberValue = Number(value)
    if (numberValue) {
      const fontSize = Math.min(Math.max(numberValue, MIN_FONT_SIZE), MAX_FONT_SIZE)
      console.log({ fontSize })
      updateItem(textNode.id(), { fontSize })
    }
    updateInputWidth()
  }

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    forceUpdate()
    e.target.value = textNode.fontSize().toString()
    updateInputWidth()
  }

  const handleChangeAlign = (active: boolean, align: string) => {
    updateItem(textNode.id(), { align: active ? align : '' } as any)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = textNode.fontSize().toString()
    }
    updateInputWidth()
  }, [updateInputWidth, textNode])

  return (
    <div className="w-full flex items-center justify-end gap-5">
      <Group>
        <button
          className={cn(
            'h-10 px-3 flex items-center gap-2 border rounded-lg transition-colors hover:bg-grey/40 active:bg-grey/20',
            isSelectingFont && 'bg-grey/40'
          )}
          disabled={isSelectingFont}
          onClick={() => {
            dispatch(customizeActions.setActiveTab(CustomizeTab.FontFamily))
          }}
        >
          <span className="block whitespace-nowrap"> {textNode.fontFamily()}</span>
          <ChevronDown className="size-5 text-disabled" />
        </button>
        <div className="relative h-10 px-3 flex items-center gap-2 border rounded-lg">
          <span ref={spanRef} className="block absolute opacity-0 pointer-events-none text-xl whitespace-nowrap" />
          <Button
            className="size-6"
            variant="text"
            size="icon-sm"
            disabled={textSize <= MIN_FONT_SIZE}
            onClick={handleDecreaseFontSize}
          >
            <Minus size={20} />
          </Button>
          <input
            ref={inputRef}
            className="w-6 min-w-6 text-lg focus:outline-none text-center translate-y-px"
            pattern={REGEXP_ONLY_DIGITS}
            maxLength={4}
            defaultValue={textSize}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <Button
            className="size-6"
            variant="text"
            size="icon-sm"
            disabled={textSize >= MAX_FONT_SIZE}
            onClick={handleIncreaseFontSize}
          >
            <Plus size={20} />
          </Button>
        </div>
      </Group>
      <Separator className="h-5" orientation="vertical" />
      <Group>
        <Toggle
          pressed={isSelectingColor}
          onPressedChange={(pressed) => {
            if (pressed) {
              dispatch(customizeActions.setActiveTab(CustomizeTab.FontColors))
            }
          }}
        >
          <SvgIcon color={textNode.fill()} icon="TextColor" className="size-6" />
        </Toggle>
        <Toggle
          pressed={isBold}
          onPressedChange={(isBold) => {
            const fontStyle = textNode.fontStyle()
            let styles = fontStyle.split(' ')
            if (isBold) {
              styles.push('bold')
            } else {
              styles = styles.filter((item) => item !== 'bold')
            }
            const newFontStyle = styles.join(' ')

            updateItem(textNode.attrs.id, { fontStyle: newFontStyle } as any)
          }}
        >
          <SvgIcon icon="TextBolder" className="size-6" />
        </Toggle>
        <Toggle
          pressed={isItalic}
          onPressedChange={(isItalic) => {
            const fontStyle = textNode.fontStyle()
            let styles = fontStyle.split(' ')
            if (isItalic) {
              styles.push('italic')
            } else {
              styles = styles.filter((item) => item !== 'italic')
            }
            const newFontStyle = styles.join(' ')

            updateItem(textNode.attrs.id, { fontStyle: newFontStyle } as any)
          }}
        >
          <SvgIcon icon="TextItalic" className="size-6" />
        </Toggle>
        <Toggle
          pressed={isUnderline}
          onPressedChange={(isUnderline) => {
            let textDecoration = ''
            if (isUnderline) {
              textDecoration = 'underline'
            }

            updateItem(textNode.attrs.id, { textDecoration } as any)
          }}
        >
          <SvgIcon icon="TextUnderline" className="size-6" />
        </Toggle>
      </Group>
      <Separator className="h-5" orientation="vertical" />
      <Group>
        <Toggle
          pressed={isAlignLeft}
          onPressedChange={(active) => {
            handleChangeAlign(active, 'left')
          }}
        >
          <SvgIcon icon="AlignLeft" className="size-6" />
        </Toggle>
        <Toggle
          pressed={isAlignCenter}
          onPressedChange={(active) => {
            handleChangeAlign(active, 'center')
          }}
        >
          <SvgIcon icon="AlignCenter" className="size-6" />
        </Toggle>
        <Toggle
          pressed={isAlignRight}
          onPressedChange={(active) => {
            handleChangeAlign(active, 'right')
          }}
        >
          <SvgIcon icon="AlignRight" className="size-6" />
        </Toggle>
      </Group>
    </div>
  )
}

export default TextStyle
