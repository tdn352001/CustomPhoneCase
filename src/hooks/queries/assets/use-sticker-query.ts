import { assetsService } from '@/services/assets-service'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useStickerQuery = () => {
  const limit = 30
  return useInfiniteQuery({
    queryKey: ['stickers'],

    queryFn: async ({ pageParam }) => {
      return assetsService
        .getStickers({
          limit,
          offset: pageParam * limit,
        })
        .then((res) => {
          const { sticker_groups, total } = res.data
          return {
            data: {
              sticker_groups: sticker_groups || [],
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
  })
}
