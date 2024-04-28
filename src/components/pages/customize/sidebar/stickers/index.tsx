/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useStickerItemQuery, useStickerQuery } from '@/hooks/queries/assets'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { StickerItem } from '@/libs/types'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { cn } from '@/libs/utils/tw-merge'
import { Skeleton } from '@/components/ui/skeleton'

const StickersTab = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>()
  const { data: stickerGroups } = useStickerQuery()

  if (!selectedGroup && stickerGroups) {
    setSelectedGroup(stickerGroups[0].sourGroupID)
  }

  const { data: stickerItems } = useStickerItemQuery(selectedGroup)

  const { addSticker } = useKonvaContext()

  const handleClick = (item: StickerItem) => {
    addSticker(item)
  }

  return (
    <div className="[--st-height:4rem] h-full">
      <ScrollArea className="w-full" orientation="horizontal" scrollbarClassName="h-2">
        <div className="min-h-[--st-height] flex border-b">
          {stickerGroups?.map((item) => {
            return (
              <button
                key={item.sourGroupID}
                className={cn(
                  'size-16 p-1 flex items-center justify-center transition-all hover:bg-black/5 focus:outline-none',
                  selectedGroup === item.sourGroupID && 'bg-black/[0.08]'
                )}
                onClick={() => setSelectedGroup(item.sourGroupID)}
              >
                <img
                  className="w-full h-full object-contain"
                  loading="lazy"
                  src={item.sourGroupSrc}
                  alt={item.sourGroupName}
                />
              </button>
            )
          })}
        </div>
      </ScrollArea>

      <ScrollArea className="w-full h-[calc(100%-var(--st-height))]">
        <div className="w-full p-2 grid grid-cols-3 place-items-center gap-2">
          {stickerItems?.map((item) => {
            return (
              <button
                key={item.sourItemID}
                className="size-[5.25rem] p-1 flex items-center justify-center transition-all hover:bg-black/5 focus:outline-none"
                onClick={() => handleClick(item)}
              >
                <img
                  className="w-full h-full object-contain"
                  src={item.sourItemSrc}
                  alt={item.sourGroupName}
                  loading="lazy"
                />
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

export const StickerTabSkeleton = () => {
  return (
    <div className="[--st-height:4rem] h-full">
      <div className="min-h-[--st-height] w-full overflow-hidden flex border-b">
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return <Skeleton key={index} className="size-16 m-1" />
          })}
      </div>
      <div className="w-full h-[calc(100%-var(--st-height))] p-2 grid grid-cols-3 grid-rows-[repeat(3,5.25rem)] place-items-center gap-2">
        {Array(9)
          .fill(null)
          .map((_, index) => {
            return <Skeleton key={index} className="size-[5.25rem] m-1" />
          })}
      </div>
    </div>
  )
}

export default StickersTab
