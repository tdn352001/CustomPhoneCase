/* eslint-disable @next/next/no-img-element */
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { useStickerItemQuery, useStickerQuery } from '@/hooks/queries/assets'
import { StickerItem } from '@/libs/types'
import { cn } from '@/libs/utils/tw-merge'
import { useCallback, useMemo, useState, UIEvent } from 'react'

const StickerTabSkeleton = () => {
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

interface StickersTabProps {
  onAddSticker?: () => void
}

const StickersTab = ({ onAddSticker }: StickersTabProps) => {
  const [selectedGroup, setSelectedGroup] = useState<string>()
  const { data: stickerGroupsData, isPending: isGroupPending } = useStickerQuery()

  const stickerGroups = useMemo(() => {
    return stickerGroupsData?.pages.flatMap((page) => page.data.sticker_groups) ?? []
  }, [stickerGroupsData])

  if (!selectedGroup && stickerGroups.length) {
    setSelectedGroup(stickerGroups[0].id)
  }

  const { data: stickerItemsData, fetchNextPage, isFetching, isPending } = useStickerItemQuery(selectedGroup)

  const currentPage = stickerItemsData?.pages[stickerItemsData.pages.length - 1].data.page || 0
  const totalItems = stickerItemsData?.pages[stickerItemsData.pages.length - 1].data.total || 0
  const limit = stickerItemsData?.pages[stickerItemsData.pages.length - 1].data.limit || 50

  const isHasMore = totalItems > (currentPage + 1) * limit

  const handleScroll = useCallback(
    (event: UIEvent) => {
      const element = event.target as HTMLDivElement

      const { scrollTop, scrollHeight, clientHeight } = element

      if (scrollHeight - scrollTop - clientHeight > 50 && isHasMore && !isFetching) {
        fetchNextPage()
      }
    },
    [isHasMore, isFetching, fetchNextPage]
  )

  const stickerItems = useMemo(() => {
    return stickerItemsData?.pages.flatMap((page) => page.data.stickers) ?? []
  }, [stickerItemsData])

  const { addSticker } = useKonvaContext()

  const handleClick = (item: StickerItem) => {
    addSticker(item)
    onAddSticker?.()
  }

  return (
    <div className="[--st-height:4rem] h-full">
      {isGroupPending ? (
        <div className="min-h-[--st-height] w-full overflow-hidden flex border-b">
          {Array(5)
            .fill(null)
            .map((_, index) => {
              return <Skeleton key={index} className="size-16 m-1" />
            })}
        </div>
      ) : (
        <ScrollArea className="w-full" orientation="horizontal" scrollbarClassName="h-1.5" scrollHideDelay={0}>
          <div className="min-h-[--st-height] flex border-b">
            {stickerGroups?.map((item) => {
              return (
                <button
                  key={item.id}
                  className={cn(
                    'size-16 p-1 flex items-center justify-center transition-all hover:bg-black/5 ',
                    selectedGroup === item.id && 'bg-black/[0.08]'
                  )}
                  onClick={() => setSelectedGroup(item.id)}
                  style={{
                    outline: 'none !important',
                  }}
                >
                  <img className="w-full h-full object-contain" loading="lazy" src={item.url} alt={item.name} />
                </button>
              )
            })}
          </div>
        </ScrollArea>
      )}

      {isGroupPending || isPending ? (
        <div className="w-full h-[calc(100%-var(--st-height))] p-2 grid grid-cols-3 grid-rows-[repeat(3,5.25rem)] place-items-center gap-2">
          {Array(9)
            .fill(null)
            .map((_, index) => {
              return <Skeleton key={index} className="size-[5.25rem] m-1" />
            })}
        </div>
      ) : (
        <ScrollArea className="w-full h-[calc(100%-var(--st-height))]" onScroll={handleScroll}>
          <div className="w-full p-2 grid grid-cols-3 place-items-center gap-2">
            {stickerItems?.map((item, index) => {
              return (
                <button
                  key={index}
                  className="size-[5.25rem] p-1 flex items-center justify-center transition-all hover:bg-black/5 focus:outline-none"
                  onClick={() => handleClick(item)}
                >
                  <img className="w-full h-full object-contain" src={item.url} alt={'Sticker'} loading="lazy" />
                </button>
              )
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}

export default StickersTab
