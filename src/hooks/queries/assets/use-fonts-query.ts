import { fonts } from '@/libs/constants/customize'
import { TypeFace } from '@/libs/types'
import { useInfiniteQuery } from '@tanstack/react-query'

export type UseFontsQueryOptions = {
  onSuccess?: (data: TypeFace[]) => void
}
export const useFontsQuery = (options: UseFontsQueryOptions = {}) => {
  return useInfiniteQuery<TypeFace[]>({
    queryKey: ['images'],
    queryFn: async ({ pageParam }) => {
      return new Promise<TypeFace[]>((resolve) => {
        setTimeout(() => {
          resolve(fonts)
        }, 500)
      }).then((res) => {
        if (options.onSuccess) {
          options.onSuccess(res)
        }
        return res
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPages, pages) => {
      return 1
    },
    staleTime: 60 * 60 * 1000,
  })
}
