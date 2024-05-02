import { TypeFace } from '@/libs/types'
import { assetsService } from '@/services/assets-service'
import { useInfiniteQuery } from '@tanstack/react-query'

export type UseFontsQueryOptions = {
  onSuccess?: (data: TypeFace[]) => void
}
export const useFontsQuery = (options: UseFontsQueryOptions = {}) => {
  const limit = 30

  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: async ({ pageParam }) => {
      return assetsService
        .getFonts({
          limit,
          offset: pageParam * limit,
        })
        .then((res) => {
          const { font_categories, total } = res.data
          if (options.onSuccess) {
            options.onSuccess(font_categories || [])
          }
          return {
            data: {
              font_categories: font_categories || [],
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
  })
}
