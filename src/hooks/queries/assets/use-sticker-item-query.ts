import { assetsService } from '@/services/assets-service'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useStickerItemQuery = (id?: string) => {
  const limit = 50
  return useInfiniteQuery({
    queryKey: ['sticker-detail', id],
    queryFn: async ({ pageParam }) => {
      return assetsService
        .getStickerItem(id!, {
          limit,
          offset: pageParam * limit,
          group_id: id,
        })
        .then((res) => {
          const { stickers, total } = res.data
          return {
            data: {
              stickers: stickers || [],
              total,
              page: pageParam,
              limit,
            },
          }
        })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPages) => {
      return lastPages.data.page + 1
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    enabled: !!id,
  })
}
