import { assetsService } from '@/services/assets-service'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useInfiniteImageQuery = () => {
  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: async ({ pageParam }) => {
      return assetsService.getPhotos({ page: pageParam })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPages, pages) => {
      const {
        data: { limit, page, total },
      } = lastPages
      if (page * limit < total) {
        return page + 1
      }
    },
    staleTime: 5 * 60 * 1000,
  })
}
