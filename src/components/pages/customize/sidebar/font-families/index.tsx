/* eslint-disable react-hooks/exhaustive-deps */
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useAppSelector } from '@/hooks/redux'

import { useForceUpdate } from '@/components/pages/customize/hooks/use-force-update'
import { useFontsQuery } from '@/hooks/queries/assets/use-fonts-query'
import { TypeFace } from '@/libs/types'
import { customizeSelector } from '@/store/slices/customize'
import cx from 'clsx'
import Konva from 'konva'
import { Check } from 'lucide-react'
import { useCallback, useMemo } from 'react'

const FontFamilies = () => {
  const forceUpdate = useForceUpdate()

  const { updateItem, getSelectedItems, loadTypeface } = useKonvaContext()
  const selectedItems = getSelectedItems()
  const textNode = selectedItems[0] as Konva.Text
  const _ = useAppSelector(customizeSelector.interactionNodeIds)!

  const handleFontFetched = useCallback((fonts: TypeFace[]) => {
    fonts.forEach((font) => loadTypeface(font))
  }, [])

  const { data } = useFontsQuery({
    onSuccess: handleFontFetched,
  })

  const fonts = useMemo(() => {
    return data?.pages.flatMap((page) => page) ?? []
  }, [data])

  const currentFontFamily = textNode?.fontFamily()

  return (
    <div className="h-full p-2">
      <div className="h-6">
        <p className="text-lg text-disabled">Fonts</p>
      </div>
      <ScrollArea className="w-full h-[calc(100%-2.4rem)]">
        <div className=" flex flex-col gap-2 px-3 py-2">
          {fonts?.map((item, index) => {
            return (
              <button
                key={`${item.name}-${index}`}
                style={{
                  fontFamily: item.name,
                }}
                className={cx(
                  'w-full h-9 px-2 flex items-center rounded-lg transition-colors hover:bg-grey/20',
                  item.name === currentFontFamily && 'bg-grey/40'
                )}
                onClick={() => {
                  updateItem(textNode.id(), { fontFamily: item.name })
                  forceUpdate()
                }}
              >
                <span>{item.name}</span>
                {item.name === currentFontFamily && <Check className="size-5 ml-auto" />}
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

export default FontFamilies
